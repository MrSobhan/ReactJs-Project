import React from 'react';
import "./UpdatePage.css"

const UpdatePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-800 dark:to-gray-900">
        

            <div class="gearbox">
                <div class="overlay"></div>
                <div class="gear one">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="gear two">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="gear three">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="gear four large">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
            </div>

            <h1 className="text-2xl md:text-3xl lalezar font-bold text-gray-800 dark:text-white mb-2">
                سایت در حال بروزرسانی است
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center max-w-md px-4 leading-7">
                لطفاً چند لحظه صبر کنید. در حال اعمال تغییرات جدید برای بهبود تجربه کاربری شما هستیم.
            </p>
        </div>
    );
};

export default UpdatePage;
