const solution = num_list => 
    [num_list.filter(num => num%2 === 0 ).length, 
     num_list.length-num_list.filter(num => num%2 === 0 ).length]