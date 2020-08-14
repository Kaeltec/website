import NextLink, { LinkProps } from 'next/link';
import React from 'react';

const defaultProps = [
  'as',
  'href',
  'scroll',
  'replace',
  'prefetch',
  'passHref',
];

const LinkComponent: React.FC<LinkProps> = ({ children, ...rest }) => {
  const nextLinkProps = defaultProps.reduce(
    (obj, prop) => Object.assign(obj, { [prop]: rest[prop] }),
    {},
  ) as LinkProps;

  return (
    <NextLink {...nextLinkProps}>
      <a {...rest} href={(rest.as || rest.href) as string}>
        {children}
      </a>
    </NextLink>
  );
};

export default LinkComponent;
