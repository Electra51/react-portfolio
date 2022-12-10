import React from 'react';

const Skills = () => {
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
         
          <thead>
            <tr>
              
              <th>Expertise</th>
              <th>Comfortable</th>
                        <th>Familiar</th>
                        
                              <th>Extra Skill</th>
                              
      
            </tr>
          </thead>
          <tbody>
           
            <tr>
              
              <td>HTML & CSS</td>
              <td>ExpressJs & NodeJs</td>
                        <td>Next.js</td>
                        <td>UI/UX Design</td>
            </tr>
           
            <tr className="hover">
             
              <td>Bootstrap5 ,TailwindCss</td>
              <td>MongoDB</td>
                        <td>TypeScript</td>
                        <td>Figma</td>
            </tr>
          
            <tr>
             
              <td> Javascript, ReactJs.</td>
              <td>Payment Gateway</td>
                        <td>Jquery</td>
                        <td>Illustrator</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default Skills;