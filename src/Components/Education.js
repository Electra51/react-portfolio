import React from 'react';

const Education = () => {
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        
        <th>Degree</th>
        <th>institute</th>
                        
                        <th>Passing Year</th>
                        <th>Result</th>

      </tr>
    </thead>
    <tbody>
     
      <tr>
        
        <td>Bsc in CSE</td>
        <td>BAUET</td>
                        
                        <td>2022</td>
                        <td>CGPA-3.59</td>
      </tr>
     
      <tr className="hover">
        <td>H.S.C</td>
        <td>PGSBCP</td>
        <td>2016</td>
        <td>GPA-4.92</td>
      </tr>
    
      <tr>
        <td>S.S.C</td>
        <td>PGGHSP</td>
        <td>2014</td>
        <td>GPA-5.00</td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default Education;