# """
# trading_engine.py

# This module provides basic functions to download market data, compute
# technical indicators and evaluate simple trading signals. It is designed to be
# a starting point for building algorithmic trading strategies.

# Dependencies:
#     - ccxt: for cryptocurrency exchange data
#     - pandas, numpy: for data handling
#     - ta or pandas_ta: for technical indicators
#     - yfinance: for forex/gold price data

# Usage:
#     python trading_engine.py

# The script will demonstrate fetching Bitcoin price data using ccxt and
# fetching gold price data using yfinance. It will then compute moving
# averages and RSI indicators and print example signals.

# Note:
#     Make sure you have installed the dependencies. See README in the
#     project or installation instructions in the accompanying documentation.
# """

# import datetime
# from typing import Optional

# import pandas as pd

# # Import libraries conditionally; if unavailable, handle gracefully.
# try:
#     import ccxt  # type: ignore
# except ImportError:
#     ccxt = None  # type: ignore

# try:
#     import yfinance as yf  # type: ignore
# except ImportError:
#     yf = None  # type: ignore

# try:
#     import pandas_ta as pta  # type: ignore
# except ImportError:
#     pta = None  # type: ignore

# try:
#     import ta  # type: ignore
# except ImportError:
#     ta = None  # type: ignore


# def fetch_crypto_ohlcv(
#     exchange_name: str,
#     symbol: str,
#     timeframe: str = "1h",
#     limit: int = 500,
# ) -> pd.DataFrame:
#     """
#     Fetch OHLCV data for a cryptocurrency trading pair using ccxt.

#     Parameters
#     ----------
#     exchange_name : str
#         Name of the exchange (e.g., 'binance', 'kraken').
#     symbol : str
#         Trading pair symbol in unified format (e.g., 'BTC/USDT').
#     timeframe : str, optional
#         Candle interval. Common values: '1m', '5m', '1h', '1d', etc.
#     limit : int, optional
#         Number of candles to retrieve. Many exchanges cap this at 1000.

#     Returns
#     -------
#     pd.DataFrame
#         DataFrame with columns: ['timestamp', 'open', 'high', 'low', 'close', 'volume']
#         and datetime index.
#     """
#     if ccxt is None:
#         raise ImportError("ccxt is not installed. Install it with `pip install ccxt`.")
#     # Create exchange instance
#     exchange_class = getattr(ccxt, exchange_name)
#     exchange = exchange_class()

#     # Fetch OHLCV data
#     ohlcv = exchange.fetch_ohlcv(symbol, timeframe=timeframe, limit=limit)

#     # Convert to DataFrame
#     df = pd.DataFrame(
#         ohlcv, columns=["timestamp", "open", "high", "low", "close", "volume"]
#     )
#     df["datetime"] = pd.to_datetime(df["timestamp"], unit="ms")
#     df.set_index("datetime", inplace=True)
#     return df


# def fetch_forex_data(
#     ticker: str,
#     start: Optional[str] = None,
#     end: Optional[str] = None,
#     interval: str = "1d",
# ) -> pd.DataFrame:
#     """
#     Fetch forex (e.g., XAUUSD) price data using yfinance.

#     Parameters
#     ----------
#     ticker : str
#         Ticker symbol accepted by Yahoo Finance. For gold futures use 'GC=F';
#         for spot gold use 'XAUUSD=X'.
#     start : str, optional
#         Start date in 'YYYY-MM-DD' format. Defaults to 1 year ago.
#     end : str, optional
#         End date in 'YYYY-MM-DD' format. Defaults to today.
#     interval : str, optional
#         Data interval ('1d', '1h', etc.).

#     Returns
#     -------
#     pd.DataFrame
#         DataFrame indexed by datetime with OHLCV columns.
#     """
#     if yf is None:
#         raise ImportError("yfinance is not installed. Install it with `pip install yfinance`.")
#     if start is None:
#         start = (datetime.datetime.utcnow() - datetime.timedelta(days=365)).strftime("%Y-%m-%d")
#     if end is None:
#         end = datetime.datetime.utcnow().strftime("%Y-%m-%d")

#     df = yf.download(ticker, start=start, end=end, interval=interval)
#     return df


# def compute_indicators(df: pd.DataFrame) -> pd.DataFrame:
#     """
#     Compute technical indicators such as EMA and RSI.

#     The function uses pandas_ta if available; otherwise falls back to ta.

#     Parameters
#     ----------
#     df : pd.DataFrame
#         DataFrame containing OHLCV data with columns: 'open', 'high', 'low', 'close', 'volume'.

#     Returns
#     -------
#     pd.DataFrame
#         The input DataFrame with additional columns for indicators.
#     """
#     result = df.copy()
#     if pta is not None:
#         # Example EMAs
#         result["ema_fast"] = pta.ema(result["close"], length=50)
#         result["ema_slow"] = pta.ema(result["close"], length=200)
#         # Example RSI
#         result["rsi"] = pta.rsi(result["close"], length=14)
#     elif ta is not None:
#         # Use ta library indicators
#         ema_fast = ta.trend.ema_indicator(result["close"], window=50)
#         ema_slow = ta.trend.ema_indicator(result["close"], window=200)
#         rsi_indicator = ta.momentum.rsi(result["close"], window=14)
#         result["ema_fast"] = ema_fast
#         result["ema_slow"] = ema_slow
#         result["rsi"] = rsi_indicator
#     else:
#         raise ImportError(
#             "Neither pandas_ta nor ta is installed. Install one of them with `pip install pandas-ta` or `pip install ta`."
#         )
#     return result


# def generate_signal(row: pd.Series) -> str:
#     """
#     Generate trading signal based on indicator values.

#     Example rule:
#         - If fast EMA > slow EMA and RSI > 50 => 'BUY'
#         - If fast EMA < slow EMA and RSI < 50 => 'SELL'
#         - Otherwise 'HOLD'

#     Parameters
#     ----------
#     row : pd.Series
#         A row with 'ema_fast', 'ema_slow' and 'rsi' values.

#     Returns
#     -------
#     str
#         'BUY', 'SELL' or 'HOLD'
#     """
#     if row["ema_fast"] > row["ema_slow"] and row["rsi"] > 50:
#         return "BUY"
#     elif row["ema_fast"] < row["ema_slow"] and row["rsi"] < 50:
#         return "SELL"
#     else:
#         return "HOLD"


# def example_usage() -> None:
#     """Demonstrate fetching data, computing indicators and generating signals."""
#     # Example 1: Crypto data (Bitcoin)
#     try:
#         btc_df = fetch_crypto_ohlcv("binance", "BTC/USDT", timeframe="1h", limit=500)
#         btc_df = compute_indicators(btc_df)
#         btc_df["signal"] = btc_df.apply(generate_signal, axis=1)
#         print("Bitcoin signals:")
#         print(btc_df[["close", "ema_fast", "ema_slow", "rsi", "signal"]].tail())
#     except Exception as exc:
#         print(f"Crypto example failed: {exc}")

#     # Example 2: Gold data (XAU/USD)
#     try:
#         gold_df = fetch_forex_data("XAUUSD=X", start="2023-01-01", end="2024-01-01", interval="1d")
#         gold_df = gold_df.rename(
#             columns={"Open": "open", "High": "high", "Low": "low", "Close": "close", "Volume": "volume"}
#         )
#         gold_df = compute_indicators(gold_df)
#         gold_df["signal"] = gold_df.apply(generate_signal, axis=1)
#         print("\nGold (XAU/USD) signals:")
#         print(gold_df[["close", "ema_fast", "ema_slow", "rsi", "signal"]].tail())
#     except Exception as exc:
#         print(f"Gold example failed: {exc}")


# if __name__ == "__main__":
#     example_usage()

