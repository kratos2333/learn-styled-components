import styled, {css} from 'styled-components';
import Proptypes from 'prop-types';


const largeStyles = ({large}) => {
  if(large){
    return css`
            padding: 10px;
            border-radius: 5px;
            font-size: 1.5em;
        `;
  }else{
    return css`
            padding: 8px;
            border-radius: 4px;
            font-size: 1em;
        `;
  }
}
const Button = styled.button`
  color: white;
  background: ${p => p.secondary ? p.theme['secondaryColor']: p.theme['primaryColor']};
  font-weight: bold;
  
  //using interpolating functions to clean up the style logic
  ${largeStyles};
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: normal;
  
  //disabled is html attribute
  &:disabled{
    background: #eee;
    color: #666;
  }
`;


// This is for documenting purpose, browser will throw warning is not matching
Button.propTypes = {
    large: Proptypes.bool,
    secondary: Proptypes.bool
}

// export default Button;
// named component export
export {Button};