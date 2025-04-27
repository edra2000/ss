document.addEventListener('DOMContentLoaded', function() {
    // تأخير التنفيذ لضمان تحميل جميع العناصر
    setTimeout(function() {
        // التحقق من وجود العناصر
        const chartElement = document.getElementById('crypto-chart');
        const liquidityElement = document.getElementById('liquidity-data');
        
        if (!chartElement || !liquidityElement) {
            console.error('العناصر المطلوبة غير موجودة في الصفحة');
            return;
        }

        try {
            // بيانات تجريبية للرسم البياني
            const options = {
                chart: {
                    type: 'line',
                    height: 400,
                    rtl: true,
                    locales: [{
                        name: 'ar',
                        options: {
                            direction: 'rtl'
                        }
                    }]
                },
                series: [{
                    name: 'سعر العملة',
                    data: [30, 40, 35, 50, 49, 60, 70]
                }],
                xaxis: {
                    categories: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو']
                }
            };

            // إنشاء الرسم البياني
            const chart = new ApexCharts(chartElement, options);
            chart.render();

            // بيانات السيولة (يمكن استبدالها ببيانات حقيقية من API)
            liquidityElement.innerHTML = `
                <h3>بيانات السيولة</h3>
                <p>نسبة الشراء: <span class="buy">65%</span></p>
                <p>نسبة البيع: <span class="sell">35%</span></p>
            `;

        } catch (error) {
            console.error('حدث خطأ في إنشاء الرسم البياني:', error);
            chartElement.innerHTML = '<p>عذراً، حدث خطأ في تحميل البيانات</p>';
        }
    }, 500); // تأخير 500 مللي ثانية
});