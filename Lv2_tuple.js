function solution(s) {
    s = s.replace(/}}/g, '').replace(/{{/g, '');
    const subsets = s.split('},{').map(c => c.split(',').map(c => Number(c)));
    subsets.sort((a,b) => a.length - b.length);
    
    const ans = subsets.reduce((acc, subset) => {
        const value = subset.filter(c => !acc.includes(c))[0];
        acc.push(value);
        return acc;
        
    }, []);
    
    return ans;

}