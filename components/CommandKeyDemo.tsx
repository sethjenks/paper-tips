export function CommandKeyDemo() {
  return (
    <div className="cmd-key-demo">
      <span className="cmd-key-demo__grain" aria-hidden="true"></span>
      <label className="cmd-key">
        <input className="cmd-key__toggle" type="checkbox" />
        <span className="sr">Command key light</span>
        <span className="cmd-key__stage" aria-hidden="true">
          <span className="cmd-key__cap">
            <span className="cmd-key__grain"></span>
            <span className="cmd-key__legend">⌘</span>
            <span className="cmd-key__lip cmd-key__on"></span>
            <span className="cmd-key__lip-core cmd-key__on"></span>
            <span className="cmd-key__filament cmd-key__on"></span>
          </span>
          <span className="cmd-key__spill cmd-key__on"></span>
          <span className="cmd-key__well cmd-key__off">
            <span className="cmd-key__pit"></span>
          </span>
          <span className="cmd-key__halo cmd-key__on"></span>
          <span className="cmd-key__lamp cmd-key__on"></span>
          <span className="cmd-key__lamp-mid cmd-key__on"></span>
          <span className="cmd-key__lamp-core cmd-key__on"></span>
        </span>
      </label>
    </div>
  );
}
