import React from 'react';
import { Button, Form , Input} from 'antd';

const NicknameEditForm = () => {
  console.log('회사에서 코딩을 너무 많이 해서 피곤함');
  return (
    <Form style={{ marginBottom: '20px', border : '1px solid #d9d9d9' , padding: '20px'}}>
      <Input addonBefore="닉네임" />
      <Button type='primary'>수정</Button>
    </Form>
  )
}



export default NicknameEditForm;