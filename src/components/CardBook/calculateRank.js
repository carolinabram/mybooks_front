export default (data) => {
    console.log('calculate rate'+data+'rate');
    let sumaRank = data.reduce((a, b) => a + b, 0);
    let average = sumaRank/data.length;
    return (Math.round(average*2)/2).toFixed(1);
}