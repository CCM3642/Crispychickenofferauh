document.getElementById("complaintForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  // بدلاً من إرسال البيانات لسيرفر، نعرض رسالة نجاح
  document.getElementById("formResponse").textContent = "✅ تم استلام الشكوى، سنتواصل معك قريباً.";
  
  // تفريغ النموذج
  this.reset();
});
