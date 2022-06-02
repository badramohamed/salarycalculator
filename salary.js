console.log('in salary ')

$(document).ready(onReady)

let totalMonthly= [];

function onReady(){
console.log('in onReady');
    
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
        
// push our montly into annual
    totalMonthly.push(annualSalary);
     let totalSalary = 0;
     for (let salary of totalMonthly){
       totalSalary += Number(salary);
    }

 if (totalSalary/12 >20000){
$('#totalMonthly').text(`Total Monthly: $ ${(totalSalary/12).toFixed(2)}`).css('background-color', 'red');
}
 
$('#totalMonthly').text(`Total Monthly: $ ${(totalSalary/12).toFixed(2)}`);
        
    }
}
// delete function
function deleteInput(){
    $(this).parent().parent().remove();
    
}

