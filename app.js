const buttonDonateNoakhali = allButtonId('btn_noakhali');
const buttonDonateFeni = allButtonId('btn_Feni');
const buttonDonateQuota = allButtonId('btn_quota');
const myBalance = textValue('My_balance');
const floodQuota = textInner('flood_Quota');
const floodFeni = textInner('flood_feni');
const floodNoakili = textInner('flood_noakili');
const blogContent = selects('blog_content');
const mainContent = selects('main_content');
const historyContent = selects('history_itemd');
const buttonBlog = allButtonId('btn_blog');
const donation = allButtonId('donation');
const history = allButtonId('history');
const donationHistory = allButtonId('btn_donation_history');
const hisoteSection = selects('history_content');
const successModal = selects('successModal');
const close_btn = allButtonId('close_btn');
const btn_home = allButtonId('btn_home');
buttonDonateNoakhali.addEventListener('click', function () {
  const noakhaliInput = inputValue('noakhali_input');
  const noakhaliDonateBalance = textValue('noakhali_donate_balance');
  const mycrantValance = myBalance - noakhaliInput;
  const crentDonateBalance = noakhaliDonateBalance + noakhaliInput;
  if (noakhaliInput > 0 && myBalance > noakhaliInput) {
    document.getElementById('noakhali_donate_balance').innerText =
      crentDonateBalance + ' BDT';
    document.getElementById('My_balance').innerText = mycrantValance + ' BDT';
    successModal.classList.remove('hidden');
    noakhaliHistory();
  } else {
    alert('Invalid Donation Amount');
  }
  document.getElementById('noakhali_input').value = '';
});
buttonDonateFeni.addEventListener('click', function () {
  const feniInput = inputValue('feni_input');
  const feniDonateBalance = textValue('feni_donate_balance');
  const mycrantValance = myBalance - feniInput;
  const crentDonateBalance = feniDonateBalance + feniInput;
  if (feniInput > 0 && myBalance > feniInput) {
    document.getElementById('feni_donate_balance').innerText =
      crentDonateBalance + ' BDT';
    fineHistory();
    document.getElementById('My_balance').innerText = mycrantValance + ' BDT';
    successModal.classList.remove('hidden');
  } else {
    alert('Invalid Donation Amount');
  }
  document.getElementById('feni_input').value = '';
});
buttonDonateQuota.addEventListener('click', function () {
  const quotaInput = inputValue('quota_input');
  const quotaDonateBalance = textValue('quota_donate_balance');
  const mycrantValance = myBalance - quotaInput;
  const crentDonateBalance = quotaDonateBalance + quotaInput;
  if (quotaInput > 0 && myBalance > quotaInput) {
    document.getElementById('quota_donate_balance').innerText =
      crentDonateBalance + ' BDT';
    quoteHistory();
    document.getElementById('My_balance').innerText = mycrantValance + ' BDT';
    successModal.classList.remove('hidden');
  } else {
    alert('Invalid Donation Amount');
  }
  document.getElementById('quota_input').value = '';
});

const noakhaliHistory = function () {
  // history
  const noakhaliInput = inputValue('noakhali_input');

  const date = Date();
  const historyList = document.getElementById('history_itemd');
  const historySection = document.createElement('div');
  historySection.className = 'bg-white p-3 rounded-md ';
  historySection.innerHTML = `
<h2 class"text-lg border-sky-500"> ${noakhaliInput} ${floodNoakili} </h2>
<p class"" class ="text-xs ">${date}</p>
`;
  historyList.append(historySection);
};
const fineHistory = function () {
  // history
  const feniInput = inputValue('feni_input');
  const date = Date();
  const historyList = document.getElementById('history_itemd');
  const historySection = document.createElement('div');
  historySection.className = 'bg-white p-3 rounded-md ';
  historySection.innerHTML = `
<h2 class"text-lg border-sky-500"> ${feniInput} ${floodFeni} </h2>
<p class"" class ="text-xs ">${date}</p>
`;
  historyList.append(historySection);
};
const quoteHistory = function () {
  // history
  const quotaInput = inputValue('quota_input');
  const date = Date();
  const historyList = document.getElementById('history_itemd');
  const historySection = document.createElement('div');
  historySection.className = 'bg-white p-3 rounded-md ';
  historySection.innerHTML = `
<h2 class"text-lg border-sky-500"> ${quotaInput} ${floodQuota} </h2>
<p class"" class ="text-xs ">${date}</p>
`;
  historyList.append(historySection);
};
history.addEventListener('click', function () {
  blogContent.classList.add('hidden');
  mainContent.classList.add('hidden');
  historyContent.classList.remove('hidden');
  donation.classList.remove('bg-[#B4F461]');
  history.classList.add('bg-[#B4F461]');
});
donation.addEventListener('click', function () {
  blogContent.classList.add('hidden');
  mainContent.classList.remove('hidden');
  historyContent.classList.add('hidden');
  donation.classList.add('bg-[#B4F461]');
  history.classList.remove('bg-[#B4F461]');
});
buttonBlog.addEventListener('click', function () {
  blogContent.classList.remove('hidden');
  mainContent.classList.add('hidden');
  historyContent.classList.add('hidden');
  donationHistory.classList.add('hidden');
  btn_home.classList.remove('hidden');
  buttonBlog.classList.add('hidden');
});
close_btn.addEventListener('click', function () {
  successModal.classList.add('hidden');
});
btn_home.addEventListener('click', function () {
  blogContent.classList.add('hidden');
  mainContent.classList.remove('hidden');
  historyContent.classList.add('hidden');
  donationHistory.classList.remove('hidden');
  btn_home.classList.add('hidden');
  buttonBlog.classList.remove('hidden');
});
