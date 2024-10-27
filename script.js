document.addEventListener("DOMContentLoaded", () => {
    // Fetch and display lottery results
    fetch('results.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("result-date").textContent = data.date;
            document.getElementById("lottery-number").textContent = data.lotteryNumber;
            document.getElementById("reward").textContent = data.reward;
            document.getElementById("coupon-type").textContent = data.couponType;
        })
        .catch(error => {
            console.error("Error loading lottery results:", error);
            document.getElementById("result-date").textContent = "Error loading results.";
        });

    // Countdown Timer
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date();
        const nextNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 12, 0, 0);
        const timeDiff = nextNoon - now;

        if (timeDiff <= 0) {
            countdownElement.innerHTML = "Expired";
            return;
        }

        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately
});
