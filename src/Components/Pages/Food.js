import React from 'react';
import './Food.css';

function Food() {
  return (
    <div className="container">
      <div className="section">
        <img className="section-image" src="./assets/images/foodimages/protine.jpg" alt="البروتينات" />
        <h2>البروتينات</h2>
        <p>البروتينات تلعب دورًا محوريًا في الرياضة والأنشطة البدنية نظرًا لدورها في بناء العضلات، إصلاح الأنسجة التالفة، وتعزيز الأداء الرياضي ..</p>
        <a href="https://www.example.com/protein-info" target="_blank" className="read-more">قراءة المزيد</a> {/* رابط خارجي لصفحة البروتينات */}
      </div>

      <div className="section">
        <img className="section-image" src="./assets/images/foodimages/protine2.jpg" alt="دورها في الرياضة" />
        <h2>دورها في الرياضة</h2>
        <p>المصادر الحيوانية: ومن الأمثلة على المصادر الحيوانية للبروتين ما يأتي: الدواجن: كالدجاج، والبط...</p>
        <a href="https://www.example.com/protein-sport" target="_blank" className="read-more">قراءة المزيد</a> {/* رابط خارجي لصفحة دور البروتين في الرياضة */}
      </div>

      <div className="section">
        <img className="section-image" src="./assets/images/foodimages/protine3.jpg" alt="مصادر البروتين" />
        <h2>مصادر البروتين</h2>
        <p>من المهم الحصول على البروتينات من المصادر النباتية أيضاً...</p>
        <a href="https://www.example.com/protein-sources" target="_blank" className="read-more">قراءة المزيد</a> {/* رابط خارجي لصفحة مصادر البروتين */}
      </div>

      <div className="section">
        <img className="section-image" src="./assets/images/foodimages/Carbs1.jpg" alt="الكربوهيدرات" />
        <h2>الكربوهيدرات</h2>
        <p>هي المصدر المفضل للجسم للحصول على الطاقة...</p>
        <a href="https://www.example.com/carbs-info" target="_blank" className="read-more">قراءة المزيد</a> {/* رابط خارجي للكربوهيدرات */}
      </div>

      <div className="section">
        <img className="section-image" src="./assets/images/foodimages/Carbs2.jpg" alt="أهمية الكربوهيدرات" />
        <h2>أهمية الكربوهيدرات</h2>
        <p>مصدر طاقة رئيسي: يتم تحويل الكربوهيدرات في الجسم إلى جلوكوز...</p>
        <a href="https://www.example.com/carbs-benefits" target="_blank" className="read-more">قراءة المزيد</a> {/* رابط خارجي لفوائد الكربوهيدرات */}
      </div>

      <div className="section">
        <img className="section-image" src="./assets/images/foodimages/Carbs3.jpg" alt="متى نتناول الكربوهيدرات؟" />
        <h2>متى نتناول الكربوهيدرات؟</h2>
        <p>قبل التمارين: تناول وجبة غنية بالكربوهيدرات قبل 2-3 ساعات من التمرين...</p>
        <a href="https://www.example.com/carbs-timing" target="_blank" className="read-more">قراءة المزيد</a> {/* رابط خارجي لتوقيت تناول الكربوهيدرات */}
      </div>

      <div className="section">
        <img className="section-image" src="./assets/images/foodimages/fiber1.jpg" alt="الألياف الغذائية" />
        <h2>الألياف الغذائية</h2>
        <p>تعد جزءًا مهمًا من النظام الغذائي الصحي، ولها دور هام في تحسين صحة الجهاز الهضمي...</p>
        <a href="https://www.example.com/fiber-info" target="_blank" className="read-more">قراءة المزيد</a> {/* رابط خارجي للألياف الغذائية */}
      </div>

      <div className="section">
        <img className="section-image" src="./assets/images/foodimages/fiber2.jpg" alt="فوائد الألياف" />
        <h2>فوائد الألياف</h2>
        <p>تحسين صحة الجهاز الهضمي: تساعد الألياف على تعزيز حركة الأمعاء...</p>
        <a href="https://www.example.com/fiber-benefits" target="_blank" className="read-more">قراءة المزيد</a> {/* رابط خارجي لفوائد الألياف */}
      </div>

      <div className="section">
        <img className="section-image" src="./assets/images/foodimages/fiber3.jpg" alt="مصادر غذائية غنية بالألياف" />
        <h2>مصادر غذائية غنية بالألياف</h2>
        <p>الخضروات: السبانخ البروكلي الجزر</p>
        <a href="https://www.example.com/fiber-sources" target="_blank" className="read-more">قراءة المزيد</a> {/* رابط خارجي لمصادر الألياف */}
      </div>
    </div>
  );
}

export default Food;
