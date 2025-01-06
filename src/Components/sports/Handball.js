import React from 'react';

const Handball = () => {
  return (
    <div>
      <h1>كرة اليد</h1>
      <h2>الوصف</h2>
      <p>
        كرة اليد هي رياضة جماعية تُلعب بين فريقين، كل فريق يتكون من 7 لاعبين. 
        الهدف هو تسجيل النقاط عبر رمي الكرة في مرمى الفريق المنافس.
      </p>
      <h2>القوانين</h2>
      <ul>
        <li>تتكون المباراة من شوطين، كل شوط مدته 30 دقيقة.</li>
        <li>لا يُسمح للاعبين بلمس الكرة بأقدامهم.</li>
        <li>يُسمح للاعب بحمل الكرة لمدة 3 ثوانٍ فقط أو التحرك بها لثلاث خطوات.</li>
        <li>لا يُسمح بالدفع أو العرقلة أثناء اللعب.</li>
        <li>تُحتسب رمية جزاء إذا تم منع فرصة تسجيل هدف بطريقة غير قانونية.</li>
      </ul>
    </div>
  );
};

export default Handball;