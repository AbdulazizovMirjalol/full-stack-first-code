// // 1. CSS stillarni yaratib, sahifaga qo'shamiz
// const style = document.createElement("style");
// style.innerHTML = `
//   * { box-sizing: border-box; font-family: sans-serif; }
//   body { background-color: #f0f2f5; display: flex; justify-content: center; padding: 40px; margin: 0; }
//   .app-container { background: white; width: 100%; max-width: 500px; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
//   h2 { text-align: center; margin-top: 0; }
//   .task-card { border: 1px solid #ddd; border-radius: 8px; padding: 15px; margin-bottom: 15px; }
//   .task-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; }
//   .task-header h3 { margin: 0; font-size: 18px; }
//   .badge { color: white; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: bold; }
//   .badge.pending { background: #FFA500; }
//   .badge.in-progress { background: #0000FF; }
//   .badge.completed { background: #008000; }
//   .task-card p { margin: 0 0 15px 0; color: #333; }
//   button { border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 14px; }
//   .btn-del { background: #FF0033; color: white; }
//   .btn-add { background: #007BFF; color: white; width: 100%; font-size: 16px; margin-top: 10px; }
//   .btn-close { background: #FF0033; color: white; width: 100%; font-size: 16px; margin-top: 5px; }
  
//   /* Modal oynasi uchun stillar */
//   .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: none; justify-content: center; align-items: center; }
//   .modal { background: white; padding: 25px; border-radius: 10px; width: 400px; }
//   .modal h3 { text-align: center; margin-top: 0; }
//   .form-control { width: 100%; margin-bottom: 15px; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; }
// `;
// document.head.appendChild(style);

// // 2. Asosiy dastur oynasi (Konteyner)
// const app = document.createElement("div");
// app.className = "app-container";
// document.body.appendChild(app);

// const title = document.createElement("h2");
// title.textContent = "Interactive To-Do List";
// app.appendChild(title);

// // Vazifalar ro'yxati turadigan joy
// const taskList = document.createElement("div");
// app.appendChild(taskList);

// // Asosiy "Add Task" tugmasi
// const addBtnMain = document.createElement("button");
// addBtnMain.className = "btn-add";
// addBtnMain.textContent = "Add Task";
// app.appendChild(addBtnMain);

// // 3. Modal (Yangi vazifa qo'shish oynasi) yaratamiz
// const modalOverlay = document.createElement("div");
// modalOverlay.className = "modal-overlay";
// document.body.appendChild(modalOverlay);

// const modal = document.createElement("div");
// modal.className = "modal";
// modalOverlay.appendChild(modal);

// const modalTitle = document.createElement("h3");
// modalTitle.textContent = "Add Task";
// modal.appendChild(modalTitle);

// // Inputlar
// const inputTitle = document.createElement("input");
// inputTitle.className = "form-control";
// inputTitle.placeholder = "Task Title";
// modal.appendChild(inputTitle);

// const inputDesc = document.createElement("textarea");
// inputDesc.className = "form-control";
// inputDesc.placeholder = "Task Description";
// modal.appendChild(inputDesc);

// const selectStatus = document.createElement("select");
// selectStatus.className = "form-control";
// ["pending", "in-progress", "completed"].forEach((status) => {
//   const option = document.createElement("option");
//   option.value = status;
//   // status matnini chiroyli qilish (masalan: "In Progress")
//   option.textContent =
//     status === "in-progress"
//       ? "In Progress"
//       : status.charAt(0).toUpperCase() + status.slice(1);
//   selectStatus.appendChild(option);
// });
// modal.appendChild(selectStatus);

// // Modal tugmalari
// const saveBtn = document.createElement("button");
// saveBtn.className = "btn-add";
// saveBtn.textContent = "Save Task";
// modal.appendChild(saveBtn);

// const closeBtn = document.createElement("button");
// closeBtn.className = "btn-close";
// closeBtn.textContent = "Close";
// modal.appendChild(closeBtn);

// // 4. Funksiyalar va Mantiq

// // Ekranga bitta taskni chizib beruvchi funksiya
// function renderTask(titleVal, descVal, statusVal) {
//   const card = document.createElement("div");
//   card.className = "task-card";

//   const header = document.createElement("div");
//   header.className = "task-header";

//   const h3 = document.createElement("h3");
//   h3.textContent = titleVal;

//   const badge = document.createElement("span");
//   badge.className = `badge ${statusVal}`;
//   badge.textContent = statusVal === "in-progress" ? "in progress" : statusVal;

//   header.appendChild(h3);
//   header.appendChild(badge);
//   card.appendChild(header);

//   const p = document.createElement("p");
//   p.textContent = descVal;
//   card.appendChild(p);

//   const delBtn = document.createElement("button");
//   delBtn.className = "btn-del";
//   delBtn.textContent = "Delete";

//   // O'chirish tugmasi bosilganda
//   delBtn.onclick = () => card.remove();

//   card.appendChild(delBtn);

//   // Yangi taskni ro'yxatga qo'shish
//   taskList.appendChild(card);
// }

// // Modalni ochish va yopish
// addBtnMain.onclick = () => (modalOverlay.style.display = "flex");
// closeBtn.onclick = () => (modalOverlay.style.display = "none");

// // Yangi taskni saqlash
// saveBtn.onclick = () => {
//   if (inputTitle.value.trim() === "") {
//     alert("Iltimos, vazifa sarlavhasini kiriting!");
//     return;
//   }

//   // UI-ga chizish
//   renderTask(inputTitle.value, inputDesc.value, selectStatus.value);

//   // Inputlarni tozalash va modalni yopish
//   inputTitle.value = "";
//   inputDesc.value = "";
//   selectStatus.value = "pending";
//   modalOverlay.style.display = "none";
// };

// // 5. Boshlang'ich (Test uchun) ma'lumotlar
// renderTask("Task 1", "Description for Task 1", "pending");
// renderTask("Task 2", "Description for Task 2", "in-progress");
// renderTask("Task 3", "Description for Task 3", "completed");