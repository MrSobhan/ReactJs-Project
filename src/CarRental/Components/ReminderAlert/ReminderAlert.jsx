import React from "react";

export default function ReminderAlert() {
  const today = new Date();
  const day = today.getDate();

  const isVisible = day >= 20 && day <= 23;

  if (!isVisible) return null;

  return (
    <div className="w-full bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 absolute left-0 top-0 z-[99999999]">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">یادآوری مهم</p>
          <p className="text-sm mt-1">لطفاً وضعیت دیتابیس را بررسی و در صورت نیاز به‌روزرسانی کنید.</p>
        </div>
        <div className="ml-4 text-yellow-500 text-xl">⚠️</div>
      </div>
    </div>
  );
}
