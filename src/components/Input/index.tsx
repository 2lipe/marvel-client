import React, {
  ComponentType,
  InputHTMLAttributes,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import * as S from './styles';

export type InputProps = {
  containerStyle?: object;
  name: string;
  icon?: ComponentType<IconBaseProps>;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ name, icon: Icon, containerStyle = {}, ...rest }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Wrapper
      isFocused={isFocused}
      style={containerStyle}
      isFilled={isFilled}
      isErrored={!!error}>
      {Icon && <Icon />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <S.ErrorWrapper variant="error" title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </S.ErrorWrapper>
      )}
    </S.Wrapper>
  );
};
