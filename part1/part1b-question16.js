for(const prop in statistics){
    
    if( prop.charAt(0) == 'r' || isOdd(statistics[prop]) == true)
        console.log('${statistics[prop]}')
}