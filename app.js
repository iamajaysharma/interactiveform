//Global variables

const name = document.getElementById('name');
name.focus();
const email = document.getElementById('mail');
const ccNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const otherRole = document.getElementById('other-title');
const color = document.querySelector('#color');
const design = document.querySelector('#design');
const optionElement = document.createElement('option');
const button = document.querySelector('button[type="submit"]');
const jobTitle = document.getElementById('title');
 
//Show otherTitle input if other is selected as a job role
otherRole.style.display = 'none';
jobTitle.addEventListener('change', (e)=>
{
if (jobTitle.value === 'other')
{
    otherRole.style.display = 'block';
}else{
otherRole.style.display = 'none';
}
});

//Create default option if no design is selected
optionElement.innerHTML = 'Please Select design';
color.insertBefore(optionElement, color.firstChild);
color.firstElementChild.selected = 'select';

//T - shirt Section starts 
//Hide all the colors 
for (let i=1; i<color.length; i++)
{
    color[i].style.display = 'none';
}
design[0].style.display = 'none';

//Change event hander to show the color options accordingly
design.addEventListener('change', (e) =>
{
    const selectedDesign = e.target.value;
    for (let i=0; i<color.length; i++)
    {
        if (selectedDesign === 'js puns')
        {
        if (color[i].value === 'cornflowerblue' || color[i].value === 'darkslategrey' || color[i].value === 'gold')
        {
            console.log(color[i].value);
            color[i].style.display = 'block';
            color[0].style.display = 'none';
            color[1].selected = 'select';
        }
        else
        {
            color[i].style.display = 'none';
        }
        }
         else if (selectedDesign === 'heart js')
         {
            if (color[i].value === 'tomato' || color[i].value === 'steelblue' || color[i].value === 'dimgrey')
            {
                console.log(i);
                color[i].style.display = 'block';
                color[0].style.display = 'none';
                color[4].selected = 'select';
            }
            else
            {
                color[i].style.display = 'none';
            }
         }
    }
});
//T-shirt Section ends

//Activities section starts 
const activities = document.querySelector('.activities');
const actTitle  = activities.getElementsByTagName('legend')[0];
const activitiesInput = activities.getElementsByTagName('input');
const createDiv = document.createElement('div');
createDiv.innerHTML = '';

activities.addEventListener('change', (e) =>
{
    const eTarget = e.target;
    let totalCost = 0;
   
    for (let i =0; i<activitiesInput.length; i++)
    {
        if (activitiesInput[i].checked)
        {
            totalCost = totalCost+parseInt(activitiesInput[i].getAttribute('data-cost'));
            createDiv.innerHTML = `Total Cost $ ${totalCost}`;
            activities.appendChild(createDiv);
            createDiv.style.fontSize = '1.2rem';
        }else
        {
            createDiv.innerHTML = `Total Cost $ ${totalCost}`;
            activities.appendChild(createDiv);
        }
    }
    
    for (let i=0; i<activitiesInput.length; i++)
    {
        const inputDay = activitiesInput[i].getAttribute('data-day-and-time');
        const eDay = eTarget.getAttribute('data-day-and-time');
        if (eTarget.checked)
        {
            if (eDay === inputDay && eTarget !== activitiesInput[i])
            {
                activitiesInput[i].disabled = true;
                activitiesInput[i].checked = false;
            }
            else
            {
                eTarget.disabled=false;
            }
        }else
        {
            activitiesInput[i].disabled = false;
        }
    }
});
//Activities section ends

//Payment section starts
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paypal.style.display = 'none';
bitcoin.style.display = 'none';
payment.firstElementChild.disabled = 'disable';
payment[1].selected = 'select';

payment.addEventListener('change', (e)=>
{
    const selectedValue = e.target.value;
    for(let i=0; i<payment.length; i++)
    {
    if(selectedValue === 'paypal')
    {
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
        paypal.style.display = 'block';
    }
    else if (selectedValue === 'bitcoin')
    {
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
        bitcoin.style.display = 'block';
    }
    else if(selectedValue === 'credit card')
    {
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
        creditCard.style.display = 'block';
    }
    }
});
// Payment section ends

// Form validation section starts 
function isValidName(input)
{
   return /^[a-zA-Z]+$/i.test(input);
}

function isValidEmail(input)
{
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(input);
}

function isValidCardNumber(input)
{
    return /^\d{13,16}$/i.test(input);
}

function isValidZipCode(input)
{
    return /^\d{5}$/i.test(input);
}

function isValidCvv(input)
{
    return /^\d{3}$/i.test(input);
}

//Creating error div for top section
const basicInfo = document.getElementsByTagName('legend')[0];
const errorDiv = document.createElement('div');
errorDiv.className = 'tooltip';
basicInfo.insertBefore(errorDiv, basicInfo.firstElementChild);
errorDiv.style.display = 'none';
const errorObject = 
{
    name: "*Only letters are allowed in the name field",
    email: "*Try name@example.com",
    required: "*All the highlighted fields are required",
    activity: "*You must select at least 1 activity",
    creditCard: "*13-16 digit number only",
    zip:"*5 digit number only",
    cvv:"*3 digit number only"
}
//Creating error div for payment section
const paymentInfo = document.getElementsByTagName('legend')[3];
const errorDiv2 = document.createElement('div');
errorDiv2.className = 'tooltip';
paymentInfo.insertBefore(errorDiv2, paymentInfo.firstElementChild);
errorDiv2.style.display = 'none';

//Button event listener evry time user clicks on the submit button
button.addEventListener('click', (e)=>
{
    errorDiv.innerText = errorObject.required;

    if(isValidName(name.value)===false)
    {
        e.preventDefault();
        name.style.border = "3px solid red";
    }else{
        name.style.border = '';
    }
  
    if(isValidEmail(email.value)===false)
    {
        e.preventDefault();
        email.style.border = "3px solid red";
    }else{
        email.style.border = '';
    }

    for (let i=0; i<activitiesInput.length; i++)
    {
    if (activitiesInput[i].checked===true)
    {
        actTitle.style.color = '';
        break;
    }else
    {
        actTitle.style.color = 'red';
        errorDiv.style.display = '';
    }
    }

    if (payment.value === 'credit card')
        {
        if(isValidCardNumber(ccNum.value)===false)
        {
            e.preventDefault();
            ccNum.style.border = "3px solid red";
        }
        else{
            ccNum.style.border = '';
        }

        if (isValidZipCode(zip.value)===false)
        {
            e.preventDefault();
            zip.style.border = "3px solid red";
        }else
        {
            zip.style.border = '';
        }

        if(isValidCvv(cvv.value)===false)
        {
            e.preventDefault();
            cvv.style.border = "3px solid red";
        }else
        {
            cvv.style.border = '';
        }
    }
});

//Providing hints on every input 
name.addEventListener('input', ()=>
{
    if(isValidName(name.value)===false)
    {
        errorDiv.innerHTML = errorObject.name;
        errorDiv.style.display ='';
    }else 
    {
        name.style.border = '';
        errorDiv.style.display = 'none';
    }
});

email.addEventListener('input', ()=>
{
    if(isValidEmail(email.value)===false)
    {
        errorDiv.innerHTML = errorObject.email;
        errorDiv.style.display ='';
    }else 
    {
        email.style.border = '';
        errorDiv.style.display = 'none';
    }
});

ccNum.addEventListener('input', ()=>
{
    if(isValidCardNumber(ccNum.value)===false)
    {
        errorDiv2.innerHTML = errorObject.creditCard;
        errorDiv2.style.display ='';
    }else 
    {
        errorDiv2.style.display = 'none';
        ccNum.style.border = '';
    }
});

zip.addEventListener('input', ()=>
{
    if(isValidZipCode(zip.value)===false)
    {
        errorDiv2.innerHTML = errorObject.zip;
        errorDiv2.style.display ='';
    }else 
    {
        errorDiv2.style.display = 'none';
        zip.style.border = '';
    }
});

cvv.addEventListener('input', ()=>
{
    if(isValidCvv(cvv.value)===false)
    {
        errorDiv2.innerHTML = errorObject.cvv;
        errorDiv2.style.display ='';
    }else 
    {
        errorDiv2.style.display = 'none';
        cvv.style.border = '';
    }
});

