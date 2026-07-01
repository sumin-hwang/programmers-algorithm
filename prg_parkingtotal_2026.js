function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;

    const parking = new Map();
    const total = new Map();

    function toMinute(time) {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    }

    for (const record of records) {
        const [time, car, type] = record.split(" ");
        const minute = toMinute(time);

        if (type === "IN") {
            parking.set(car, minute);
        } else {
            const used = minute - parking.get(car);
            total.set(car, (total.get(car) || 0) + used);
            parking.delete(car);
        }
    }

    const end = toMinute("23:59");

    for (const [car, inTime] of parking) {
        total.set(car, (total.get(car) || 0) + (end - inTime));
    }

    function calcFee(time) {
        if (time <= basicTime) return basicFee;

        return (
            basicFee +
            Math.ceil((time - basicTime) / unitTime) * unitFee
        );
    }

    const answer = [];
    const cars = [...total.keys()].sort();

    for (const car of cars) {
        answer.push(calcFee(total.get(car)));
    }

    return answer;
}