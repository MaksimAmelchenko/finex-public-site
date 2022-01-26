import React, { AnchorHTMLAttributes } from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

export interface ILinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'css'> {
  to: string;
}

export const Link = React.forwardRef<HTMLAnchorElement, ILinkProps>(function Link(props, ref) {
  const { to, ...rest } = props;

  return /^(https?:\/\/|tel:|mailto:)/.test(to) ? (
    <a href={to} {...rest} target="_blank" rel="nofollow noopener noreferrer" />
  ) : (
    <LocalizedLink to={to} language={null} {...rest} ref={ref} />
  );
});
