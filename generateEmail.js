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
  html += '<div id="header" style="width:100%;color: #012169;align:center;"><h1>RMA Confirmation</h1></div>';
  html += '<div>';
  html += '<p>Thank you for contacting the Customer Experience Team!</p>';
  html += '<p>This email template is for use for Hacktoberfest 2019 - I hope I am not too late for a shirt!</p>';
  html += '<table id="imageholder">';
  html += '<tr>';
  html += '<td><img style="width:50%" src="https://4463904.app.netsuite.com/core/media/media.nl?id=5884446&c=4463904&h=ec80e6bce5a77834d6d1"><br>Correct</td>';
  html += '<td><img style="width:50%" src="https://4463904.app.netsuite.com/core/media/media.nl?id=5884447&c=4463904&h=f8aac24da723988cdc48"><br>Incorrect</td>'
  html += '</tr>';
  html += '</table>';
  html += '</div>';
  var subj = 'Happy Hacktoberfest! ' + recNum;
  nlapiSendEmail(467655, 'andrew@peepers.com', subj, html, null, null, attRecs, attFile, true, null, 'meeps@meepers.com');
  nlapiLogExecution('DEBUG','Progress Indicator','Email Sent');
  }
}
