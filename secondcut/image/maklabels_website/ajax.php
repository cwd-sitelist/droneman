<?php 

error_reporting(0);

if(isset($_POST['submit'])){

	//Email

	$mem_fname=$_POST['name'];

	$to = "info.maklabels@gmail.com";

	$subject = "Contact Form";

	$body = '<table width="100%" bgcolor="#f6f6f6" border="0" cellspacing="0" cellpadding="0">

		<tr>

			<td width="5%">&nbsp;</td>

			<td width="90%"><table width="635" border="0" align="center" cellpadding="0" cellspacing="0">

			  <tr>

				<td height="40" valign="top">&nbsp;</td>

			  </tr>

			  <tr>

				<td valign="top"><table width="635" style="border:solid 1px #ddd; box-shadow:0 0 20px #e8e8e9; -moz-box-shadow:0 0 20px #e8e8e9; -webkit-box-shadow:0 0 20px #e8e8e9;" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="20">

				  <tr>

					<td style="border-bottom:solid 1px #ddd" bgcolor="#FFFFFF"><img style="text-align:center;width:250px" src="http://itacumens.info/design/mak/images/logo.jpg" alt="MAK" />

					</td>

				</tr>

				  <tr>

					<td>

						<p style="margin-left:10px;font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#58585A;"><strong style="font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#58585A;">Hi Admin,</strong><br />

						</p>

						<p style="margin-left:10px;font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#58585A;">

						Name : '.$mem_fname.'<br />

						Company Name : '.$_POST['companyname'].'<br />';

						$body =$body.'Email : '.$_POST['email'].'<br />';

						$body =$body.'Product : '.$_POST['product'].'<br />';

							$body =$body.'Message : '.$_POST['comment'].'<br />';

							

						$body =$body.'</p>

						<p style="margin-left:10px;font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#58585A;">Thanks,<br />

							'.$mem_fname.'

						</p>

					</td>

				  </tr>

				  <tr>

					<td height="50" valign="top" style="padding-top:10px;padding-right:20px;padding-left:10px;padding-bottom:0px;font-size:10px;border-top:1px solid #ddd"><p style="font-family:Arial, Helvetica, sans-serif; font-size:10px; color:#58585A;">Disclaimer! Please do not reply to this message; it was sent from an unmonitored email address. This message is a service email related to your use of MAK. For general inquiries or to request support with your MAK account, please email us at <a href="mailto:support@MAK" style="color:#c71f53;" target="_blank">support@MAK </a></p></td>

				</tr>

				<tr>

					<td style="margin:0px;padding:10px 20px 10px 10px;font-size:12px;background-color:#257667;color:#FFF"><p style="font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#FFF;">MAK</p></td>

				</tr>

				</table></td>

			</tr>

			  <tr>

				<td height="40">&nbsp;</td>

			</tr>

		  </table></td>

			<td width="5%">&nbsp;</td>

		</tr>

	</table>';

		

		$headers[] = 'MIME-Version: 1.0';

		$headers[] = 'Content-type: text/html;';

		//get admin active email		

		$from = 'noreply@mak';

		$headers[] = 'From: '.$from;

		mail($to,$subject,$body,implode("\r\n", $headers));

		echo "<script>alert('Your form is submitted. We will catch you soon! Thanks!');location.href='enquiry.html'</script>";

}

?>