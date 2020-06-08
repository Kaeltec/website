import partnersMarkdown from '@app/markdown/polices_partners.md';
import privacyMarkdown from '@app/markdown/polices_privacy.md';
import termsMarkdown from '@app/markdown/polices_terms.md';

export default {
  privacy: {
    name: 'privacy',
    title: 'Política de Privacidade',
    markdown: privacyMarkdown,
  },
  terms: {
    name: 'terms',
    title: 'Termos de Uso',
    markdown: termsMarkdown,
  },
  partners: {
    name: 'partners',
    title: 'Diretrizes Parceiros',
    markdown: partnersMarkdown,
  },
};
