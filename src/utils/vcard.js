import { SANA_HODAIE_DATA } from '../data.js';

export function generateVCardString() {
  const data = SANA_HODAIE_DATA;
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:هدائی;ثنا;;;`,
    `FN:${data.nameFa} (${data.nameEn})`,
    `ORG:${data.companyOrOrgFa}`,
    `TITLE:${data.jobTitleFa}`,
    `TEL;TYPE=CELL,VOICE:${data.phone}`,
    `EMAIL;TYPE=INTERNET,PREF:${data.email}`,
    `URL;TYPE=Instagram:${data.instagramUrl}`,
    `NOTE:${data.taglineFa} - ${data.jobTitleEn}`,
    'END:VCARD',
  ].join('\r\n');
}

export function downloadVCardFile() {
  const vcardText = generateVCardString();
  const blob = new Blob([vcardText], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Sana-Hodaie-Cloud-Architect.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
