import { Button, Col, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  margin-top: 2rem;
  text-align: center;
`;

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <StyledRow>
      <Col sm={3} md={4} lg={5}></Col>
      <Col sm={18} md={16} lg={14}>
        <h1>Info page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          modi rerum nostrum esse molestiae nesciunt totam dolore voluptatem
          quisquam, impedit sit consequuntur, iste necessitatibus corrupti
          reiciendis magnam porro a minus dolorum. Aspernatur numquam deserunt
          illum in maiores sit! Nostrum iste voluptate id consectetur numquam
          perferendis aperiam incidunt, animi inventore fuga vero est fugit
          minima repellat ducimus iusto vel quas voluptas quos ipsum sunt
          similique. Rem ut, nam error, ducimus veniam reiciendis harum soluta
          nobis et officiis eum magni animi necessitatibus. Eligendi sed in
          voluptatibus cumque quas quos deserunt voluptate quae, necessitatibus,
          magnam, numquam obcaecati iste error! Sit, blanditiis distinctio!
          Corporis illo soluta nam quisquam cum voluptate quidem quasi sequi
          dolorum laborum labore impedit, perspiciatis itaque dolore similique
          maxime, distinctio consectetur rerum fugiat qui. Maiores corrupti eum
          blanditiis esse, dolorum dignissimos rem iusto incidunt laboriosam,
          totam voluptatum dicta quisquam optio accusamus quasi pariatur
          reiciendis laborum corporis voluptates perspiciatis? Beatae distinctio
          dolores quod accusamus temporibus, sed neque tempore eaque officiis
          iusto rem ipsam dicta nostrum harum mollitia dolor. Ullam aut neque
          soluta architecto vel maiores, repellendus omnis unde, magnam pariatur
          eius iste impedit optio quaerat perferendis vitae dolore libero autem
          ratione voluptatibus, nisi delectus necessitatibus dolor voluptatem!
          Fuga perspiciatis corporis explicabo aperiam.
        </p>
        <Button type='primary' onClick={() => history.push('/')}>
          Go back to tasks
        </Button>
      </Col>
    </StyledRow>
  );
};

export default AboutPage;
