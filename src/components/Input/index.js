import React from 'react'
import PropTypes from 'prop-types'
import StyledInput from './StyledInput'

const invalidInput = {borderColor: 'red'}
const invalidLabel = {color: 'red', fontSize: '0.6rem', textAlign: 'left'}

const Input = ({input, type, label, meta: {touched, error, warning}, ...custom}) => {
  return (
    <React.Fragment>
      <StyledInput
        type={type}
        style={touched && error ? invalidInput : {}}
        placeholder={label}
        {...input}
        {...custom}
        value={custom.disabled || input.value === -1 ? '' : input.value}
      />
      {touched && error && <p style={touched && error ? invalidLabel : {}}>{error}</p>}
    </React.Fragment>
  )
}

Input.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object
}

export default Input
