function solution(fees, records) {
    var answer = [];
    const parkingMap = new Map();
    const totalMap = new Map();
    const [basic, basicFare, addTime, addFare] = fees;
    
    for(const record of records){
        const [time, carnum, type] = record.split(" ");
        let timeCalc = calcTime(time);
        
        if(type === 'IN'){
            parkingMap.set(carnum, timeCalc);    
        }else{
            if(!totalMap.has(carnum)){
                totalMap.set(carnum, timeCalc - parkingMap.get(carnum));
                parkingMap.delete(carnum);
            }else{
                totalMap.set(carnum, totalMap.get(carnum) + (timeCalc - parkingMap.get(carnum)))
                parkingMap.delete(carnum);
            }
        }
    }
    
    for(const [carnum, time] of parkingMap){
        const usetime = calcTime('23:59') - time;
        totalMap.set(carnum, (totalMap.get(carnum) || 0) + usetime);
    }

    let sortedMap = [...totalMap].sort((a,b) => a[0].localeCompare(b[0]));
    
    for(let i =0; i < sortedMap.length; i++){
        const [carnum, time] = sortedMap[i];
        if (time <= basic) {
            answer.push(basicFare);
        } else {
            answer.push(
            basicFare + Math.ceil((time - basic) / addTime) * addFare);
        }
    }
    
    function calcTime(time){
        const [hr, min] = time.split(":").map(Number);
        return hr *60 + min;
    }
    return answer;
}