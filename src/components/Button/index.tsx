import styled from 'styled-components';

interface Props {
  outlined?: boolean;
  width?: string;
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : '1px solid var(--twitter)')};
  width: ${(props) => props?.width};
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    opacity: .9;
  }
`;
