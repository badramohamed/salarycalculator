console.log('in salary ')

$(document).ready(readyNow)

let totalMonthly= [];

function readyNow(){
    console.log('in readyNow')
   
    $('#submitBtn').on('click', employeeSalary);
   
    $('#employeeSal').on('click', '#deleteBtn', deleteInput);


    function employeeSalary(){
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let id = $('#id').val();
        let title = $('#title').val();
        let annualSalary = $('#annualSalary').val();
    
      // append to dom
      $('#employeeSal').append(`
      <tr>
           <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${id}</td>
          <td>${title}</td>
          <td>$${annualSalary}</td>
          <th><button id="deleteBtn">Delete</button></th>
      </tr> 
      `)
      
          $('#firstName').val('');
          $('#lastName').val('');
          $('#id').val('');
          $('#title').val('');
          $('#annualSalary').val('');
    }
}
