import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('aayuboovan!');
  await page.getByText('ආයුබෝවන්!').click();
});


test('Pos_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedhara yanavaa.');
  await page.getByText('මම ගෙදර යනවා.').click();
});

test('Pos_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaa enavadha?');
  await page.getByText('ඔයා එනවද?').click();
});

test('Pos_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('vahaama enna.');
  await page.getByText('වහාම එන්න.').click();
});

test('Pos_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama ehema karanne naehae.');
  await page.getByText('මම එහෙම කරන්නේ නැහැ.').click();
});

test('Pos_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama iiyee gedhara giyaa.');
  await page.getByText('මම ඊයේ ගෙදර ගියා.').click();
});

test('Pos_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('amma heta   enavaa.');
  await page.getByText('අම්ම හෙට   එනවා.').click();
});

test('Pos_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api kaeema kanna yanavaa saha passe chithrapatayak balanavaa.');
  await page.getByText('අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයක් බලනවා.').click();
});

test('Pos_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oya enavaanam mama balan innavaa.');
  await page.getByText('ඔය එනවානම් මම බලන් ඉන්නවා.').click();
});

test('Pos_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakaralaa mata udhavvak karanna puLuvandha?');
  await page.getByText('කරුණාකරලා මට උදව්වක් කරන්න පුළුවන්ද?').click();
}); 


test('Pos_Fun_0011 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ehema karapan ban.');
  await page.getByText('එහෙම කරපන් බන්.').click();
}); 

test('Pos_Fun_0012 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari hari eka lassanayi.');
  await page.getByText('හරි හරි එක ලස්සනයි.').click();
}); 

test('Pos_Fun_0013 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(' meeting ekak thiyennee.');
  await page.getByText(' meeting එකක් තියෙන්නේ.').click();
}); 

test('Pos_Fun_0014 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(' api Kandy valata yamu.');
  await page.getByText(' අපි Kandy වලට යමු.').click();
}); 


test('Pos_Fun_0015 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(' mage ID eka dhenna.');
  await page.getByText(' mage ID එක දෙන්න.').click();
}); 

test('Pos_Fun_0016 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Rs. 1500 gevanna.');
  await page.getByText(' Rs. 1500 ගෙවන්න.').click();
}); 

test('Pos_Fun_0017 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('7.30 AM enna.');
  await page.getByText('7.30 AM එන්න.').click();
}); 

test('Pos_Fun_0018 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api yamu.');
  await page.getByText('අපි යමු.').click();
}); 

test('Pos_Fun_0019 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama   pansal yanavaa.');
  await page.getByText('මම   පන්සල් යනවා.').click();
}); 

test('Pos_Fun_0020 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama pansal yanavaa .api passe kathaa karamu.');
  await page.getByText('මම පන්සල් යනවා .අපි පස්සෙ කතා කරමු.').click();
}); 

test('Pos_Fun_0021 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama paasalee innavaa saha api heta gaman yamu kiyalaa hithan innavaa.');
  await page.getByText('මම පාසලේ ඉන්නවා සහ අපි හෙට ගමන් යමු කියලා හිතන් ඉන්නවා.').click();
}); 


test('Pos_Fun_0022 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ela machan!');
  await page.getByText('එල මචන්!').click();
}); 

test('Pos_Fun_0023 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata eeka one!');
  await page.getByText('මට ඒක one!').click();
}); 

test('Pos_Fun_0024 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('puLuvandha mata eeka dhenna?');
  await page.getByText('පුළුවන්ද මට ඒක දෙන්න?').click();
}); 

test('Neg_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamagedharayanavaa');
  await page.getByText('මමගෙදරයනවා').click();
}); 

test('Neg_Fun_0002 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama gedhra yanavaa');
  await page.getByText('මමගෙදරයනවා').click();
}); 

test('Neg_Fun_0003 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('adoo machan ooka hariyata karapanko');
  await page.getByText('අඩෝ මචන් ඕක හරියට කරපන්කො').click();
}); 
test('Neg_Fun_0004 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama @@@ yanavaa');
  await page.getByText('මම @@@ යනවා').click();
}); 

test('Neg_Fun_0005 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata eeka one!');
  await page.getByText('මට ඒක one!').click();
}); 
test('Neg_Fun_0006 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamagedharayanavaasahapassekathakarannam');
  await page.getByText('මමගෙදරයනවාසහපස්සෙකතකරන්නම්').click();
}); 

test('Neg_Fun_0007 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama 😊 yanavaa');
  await page.getByText('මම 😊 යනවා').click();
}); 

test('Neg_Fun_0008 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('12345');
  await page.getByText('12345').click();
}); 

test('Neg_Fun_0009 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hciksjz');
  await page.getByText('හcඉක්ස්ජz').click();
}); 

test('Neg_Fun_0010 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('thx bro');
  await page.getByText('තx bro').click();
}); 

test('Pos_UI_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('thx bro');
  await page.getByText('මම ගෙදර යනවා').click();
}); 