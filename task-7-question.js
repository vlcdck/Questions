let time = '59'; //String

if (0 <= time && time <= 15){
    console.log('Перша чверть');
} else if (15 < time && time <= 30){
    console.log('Друга чверть');
} else if (30 < time && time <= 45){
    console.log('Третя чверть');
} else if (45 < time && time <= 59) {
    console.log('Четверта чверть');
}else{
    console.log('PROBLEM!')
}
