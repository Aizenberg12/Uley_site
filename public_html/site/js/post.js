
function SendPost() {
	var phone=document.getElementById("phone").value
	 pass=document.getElementById("password").value;
	//��������� GET ������ � ������� �����
	$$a({
		type:'post',//��� �������: get,post ���� head
		url:'login2.php',//url ����� ����� �����������
		data:{'phone':phone,'password':pass},//��������� �������
		response:'text',//��� ������������� ������ text ���� xml
		success:function (data) {//������������ ��������� �� �������
			$$('result',$$('result').innerHTML+'<br />'+data);
		}
	});
}
