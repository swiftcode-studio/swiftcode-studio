/* @ds-bundle: {"format":4,"namespace":"AINative","components":[{"name":"Button"},{"name":"Badge"},{"name":"StageCard"},{"name":"Pipeline"},{"name":"Terminal"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }

  function Button(props) {
    var variant = props.variant || 'primary';
    var size = props.size || 'md';
    var tag = props.href ? 'a' : 'button';
    return h(tag, {
      className: cx('an-btn', 'an-btn--' + variant, size === 'sm' && 'an-btn--sm', props.className),
      href: props.href, disabled: props.disabled, onClick: props.onClick, type: props.href ? undefined : (props.type || 'button')
    }, props.children, props.arrow ? h('span', { className: 'an-btn__arrow', 'aria-hidden': 'true' }, '→') : null);
  }

  function Badge(props) {
    var tone = props.tone || 'neutral';
    var mark = tone === 'human' ? h('span', { className: 'an-diamond', 'aria-hidden': 'true' })
      : tone === 'agent' ? h('span', { className: 'an-dot', 'aria-hidden': 'true' }) : null;
    return h('span', { className: cx('an-badge', 'an-badge--' + tone, props.className) }, mark, props.children);
  }

  function StageCard(props) {
    var owner = props.owner || 'agent';
    var ownerLabel = owner === 'human' ? 'Người làm' : owner === 'both' ? 'AI + người' : 'AI làm';
    return h('article', { className: cx('an-stage', props.active && 'an-stage--active', props.className) },
      h('div', { className: 'an-stage__top' },
        h('span', { className: 'an-stage__eyebrow' }, props.index + ' / ' + props.code),
        h(Badge, { tone: owner === 'human' ? 'human' : owner === 'agent' ? 'agent' : 'neutral' }, ownerLabel)),
      h('h3', { className: 'an-stage__title' }, props.title),
      props.children ? h('p', { className: 'an-stage__body' }, props.children) : null,
      h('div', { className: 'an-stage__foot' },
        props.artifact ? h('span', null, 'Đầu ra ', h('code', { className: 'an-file' }, props.artifact)) : null,
        props.gate ? h('span', { className: 'an-gate' }, h('span', { className: 'an-diamond', 'aria-hidden': 'true' }), props.gate) : null));
  }

  var DEFAULT_STAGES = [
    { index: '01', name: 'Lên kế hoạch', file: 'intent.md', gate: true },
    { index: '02', name: 'Thiết kế', file: 'spec.md', gate: true },
    { index: '03', name: 'Xây dựng', file: 'plan.md → code', gate: true },
    { index: '04', name: 'Kiểm thử', file: 'tests + screenshots', gate: false },
    { index: '05', name: 'Triển khai', file: 'PR + REVIEW.md', gate: true },
    { index: '06', name: 'Vận hành', file: 'intent.md mới', gate: false }
  ];

  function Pipeline(props) {
    var stages = props.stages || DEFAULT_STAGES;
    return h('div', { className: cx('an-pipe', props.className), role: 'list', 'aria-label': 'Quy trình sáu giai đoạn' },
      h('div', { className: 'an-pipe__row' }, stages.map(function (s, i) {
        return h('div', { key: s.index, role: 'listitem', className: cx('an-pipe__step', props.current === i && 'an-pipe__step--current') },
          h('div', { className: 'an-pipe__node' }, s.index),
          s.gate ? h('span', { className: 'an-pipe__gate', title: 'Cổng duyệt của người', 'aria-label': 'Cổng duyệt' }) : null,
          h('div', null, h('div', { className: 'an-pipe__name' }, s.name), h('div', { className: 'an-pipe__file' }, s.file)));
      })),
      props.loop === false ? null : h('div', { className: 'an-pipe__loop' }, props.loopLabel || 'Vận hành sinh intent.md mới → quay lại Lên kế hoạch'),
      props.legend === false ? null : h('div', { className: 'an-pipe__legend' },
        h('span', null, h('span', { className: 'an-dot' }), 'AI làm'),
        h('span', null, h('span', { className: 'an-diamond' }), 'Người duyệt')));
  }

  function Terminal(props) {
    var lines = props.lines || [];
    return h('div', { className: cx('an-term', props.lift && 'an-term--lift', props.className) },
      h('div', { className: 'an-term__bar' }, h('i'), h('i'), h('i'), h('span', { className: 'an-term__title' }, props.title || 'terminal')),
      h('div', { className: 'an-term__body' }, lines.map(function (l, i) {
        return h('div', { key: i, className: 'an-term__line an-term__line--' + (l.kind || 'out') }, l.text);
      })));
  }

  window.AINative = { Button: Button, Badge: Badge, StageCard: StageCard, Pipeline: Pipeline, Terminal: Terminal };
})();
