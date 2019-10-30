function generateEmail(type){
  var recId = nlapiGetRecordId();
  var recType = nlapiGetRecordType();
  var parRec = nlapiLoadRecord(recType, recId);
  var sChan = parRec.getFieldValue('class');
  if (sChan == '10'){
  var attRecs = [];
  attRecs['transaction'] = recId;
  var recNum = parRec.getFieldValue('tranid');
  var attFile = nlapiPrintRecord('transaction',recId,'PDF');
  var html = '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
  html += '<div>';
  html += '<div id="header" style="width:100%;color: #012169;align:center;"><h1>Peepers RMA Confirmation</h1></div>';
  html += '<div>';
  html += '<p>Thank you for contacting the Peepers Customer Experience Team!</p>';
  html += '<p>We stand behind our product and offer an exchange option for any <i>current</i> items.</p>';
  html += '<p>Any discontinued items will not receive credit and Peepers is not responsible for returning discontinued product.  This product will be donated to a great cause on your behalf!</p>';
  html += '<p>Prior to sending back Peepers glasses, please ensure the product is in good selling condition (i.e. clean lenses, Peepers barbell tag attached, etc.). We ask the following packaging requirements to avoid any restocking fees:</p>';
  html += '<ol type="1">';
  html += '<li>Peepers eyewear should be free of damages and in a saleable condition</li>';
  html += '<li>Return each pair of Peepers in a polybag (or canvas case) to avoid scratches and damages during transit</li>';
  html += '<li>A glasses case must be included for each pair of Peepers in your return</li>';
  html += '<li>There are no specifications on the size of the box used for the return, however, please ensure product is packed tight so that product does not move around during transit.</li>';
  html += '</ol>';
  html += '<table id="imageholder">';
  html += '<tr>';
  html += '<td><img src="https://4463904.app.netsuite.com/core/media/media.nl?id=5884446&c=4463904&h=ec80e6bce5a77834d6d1"><br>Correct</td>';
  html += '<td><img src="https://4463904.app.netsuite.com/core/media/media.nl?id=5884447&c=4463904&h=f8aac24da723988cdc48"><br>Incorrect</td>'
  html += '</tr>';
  html += '</table>';
  html += '<p>All glasses being swapped must be <i>current</i> styles and in perfect selling condition (i.e. clean lenses, no store pricing stickers attached, etc.). Should you have any pricing stickers attached to the Peepers tag, we ask that you remove the entire Peepers tag.</p>';
  html += '<p><b>A case must be included for each item in your return or credit will not be issued.</b>  Any product returned with store tags/stickers is subject to a 50% restocking fee.</p>';
  html += '<p><b>' + recNum + ' is valid for 14 business days.</b>  If you are unable to ship your merchandise back within this time frame this RMA number is no longer valid and you must request a new number.</p>';
  html += '<p>Please return your items to our warehouse address below:</br>';
  html += 'Peepers Distribution Center</br>';
  html += '9935 E US Hwy 12</br>';
  html += 'Michigan City, IN 46360</br>';
  html += recNum + '</br>';
  html += '</p>';
  html += '<p><i>Upon receipt of your return, we will communicate to you via email with your credit balance. You may choose to apply it towards your next reorder or an open invoice. Credit will remain on your account until we are instructed to use it.</i></p>';
  html += '</div>';
  html += '<div id="footer"';
  html += '<a style="color:#ce0f69">VISIT</a> <a style="color: grey;">peepers.com |</a>';
  html += '<a style="color:#ce0f69">CALL</a> <a style="color: grey;">800.348.2508 |</a>';
  html += '<a style="color:#ce0f69">FAX</a> <a style="color: grey;">866.456.2908 |</a>';
  html += '<a style="color:#ce0f69">EMAIL</a> <a style="color: grey;">peeps@peepers.com</a>';
  html += '</div>';
  html += '<div style="align:center; color: black; font-size: 6pt">© 2019 Peepers Reading Glasses | Peepers by PeeperSpecs 9935 E. U.S. Hwy 12 Michigan City, IN 46360</div>';
  html += '</div>';
  var subj = 'Peepers RMA Confirmation ' + recNum;
  nlapiSendEmail(467655, 'andrew@peepers.com', subj, html, null, null, attRecs, attFile, true, null, 'peeps@peepers.com');
  nlapiLogExecution('DEBUG','Progress Indicator','Email Sent');
  }
}
