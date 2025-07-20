import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function ReminderAlert() {
  const today = new Date();
  const day = today.getDate();

  const [isVisible, setIsVisible] = useState(day >= 20 && day <= 23)


  return (
    <>
      {
        isVisible && (
          <div className="w-full bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-4 mb-4 absolute left-0 top-0 z-[99999999]">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex">
                  <div className="ml-2 text-yellow-500 text-xl">⚠️</div>
                  <p className="font-semibold lalezar text-lg">یادآوری مهم</p>
                </div>
                <p className="text-xs md:text-md mt-2">لطفاً وضعیت دیتابیس را بررسی و در صورت نیاز به‌روزرسانی کنید.</p>
              </div>
              <IoClose className="md:ml-4 text-3xl cursor-pointer" onClick={() => setIsVisible(false)} />
            </div>
          </div>
        )
      }
    </>
  );
}
