const jiraRegexp = /(\[[A-Za-z\d]{2,}-\d+\])+/g;

const meaningfulCommitMessageLength = 10;

const jiraTicket = ({ subject }) => {
  if (!subject) {
    return [false, 'subject missed'];
  }
  const [tickets] = subject.match(jiraRegexp) || [];

  if (!tickets) {
    return [false, 'jira ticket right after type missed'];
  }

  const hasMeaningfulMessage = subject.length - tickets.length <= meaningfulCommitMessageLength;

  return [!hasMeaningfulMessage, 'meaningful commit message missed'];
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'jira-ticket': jiraTicket,
      },
    },
  ],
  rules: {
    // because we have to add JIRA tickets to header
    'header-max-length': [2, 'always', 140],
    'body-max-line-length': [2, 'always', 500],
    'jira-ticket': [2, 'always'],
  },
};
