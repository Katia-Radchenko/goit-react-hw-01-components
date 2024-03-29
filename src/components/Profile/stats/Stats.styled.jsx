import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  background-color: #eeeeee;
  border: 1px solid #999999;
  padding-left: 0;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 20px;
  flex-basis: calc(100% / 3);

  &:not(:last-child) {
    border-right: 1px solid #999999;
  }
`;

export const StatLabel = styled.span`
  margin: 0 auto;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  color: #999999;
`;

export const StatQuantity = styled.span`
  margin: 0 auto;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.25;
`;
