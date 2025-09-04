// داده‌ها (ورودی و خروجی‌ها)
const X = [1, 2, 3, 4];
const Y = [5, 7, 9, 11]; // اینا واقعا 2x + 3 هستن

// حدس اول: y = w * x + b
let w = Math.random(); // شیب
let b = Math.random(); // عرض از مبدا
let learningRate = 0.01;

function predict(x) {
    return w * x + b;
}

function train() {
    for (let epoch = 0; epoch < 1000; epoch++) {
        let dw = 0;
        let db = 0;

        for (let i = 0; i < X.length; i++) {
            const yPred = predict(X[i]);
            const error = yPred - Y[i];
            dw += error * X[i];
            db += error;
        }

        dw = dw / X.length;
        db = db / X.length;

        // به روزرسانی w و b
        w -= learningRate * dw;
        b -= learningRate * db;
    }
}

train();

console.log("w:", w.toFixed(2), "b:", b.toFixed(2));
console.log("پیش‌بینی برای x=5:", predict(5).toFixed(2));
