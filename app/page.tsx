import { GuideEffects } from "../components/GuideEffects";
import { IconSprite } from "../components/IconSprite";

export default function Home() {
  return (
    <>
      <IconSprite />
      
      <div className="ruler" aria-hidden="true"></div>
      
      <div className="shell">
      
      <header className="masthead">
        <p className="eyebrow">
          <span>An unofficial field guide to</span>
          <svg className="mark" aria-hidden="true"><use href="#ic-paper"/></svg><span>paper.design</span><span className="dot" aria-hidden="true">/</span>
          <span>compiled september 2026</span>
        </p>
        <h1>Paper <span>Tips</span></h1>
        <p className="lede"><strong>Get fast in Paper.</strong> Every shortcut worth knowing, plus how to put agents to work.</p>
      
      </header>
      
      {/* quick card: the common case, without scrolling */}
      <section className="quickcard" aria-labelledby="qc-title">
        <header>
          <h2 id="qc-title">THE TWELVE</h2>
          <span>get up and running quickly</span>
          <button className="copy" type="button" data-copy-svg="">copy as svg</button>
        </header>
        <div className="qc-grid">
          <div><span className="k"><kbd>&#8679;</kbd><kbd>&#8984;</kbd><kbd>,</kbd><span className="plus">/</span><kbd>.</kbd></span><span className="d">Font size, down / up</span></div>
          <div><span className="k"><kbd>&#8997;</kbd><kbd>&#8984;</kbd><kbd>,</kbd><span className="plus">/</span><kbd>.</kbd></span><span className="d">Font weight, down / up</span></div>
          <div><span className="k"><kbd>&#8997;</kbd><kbd>,</kbd><span className="plus">/</span><kbd>.</kbd></span><span className="d">Letter spacing, down / up</span></div>
          <div><span className="k"><kbd>&#8679;</kbd><kbd>&#8997;</kbd><kbd>,</kbd><span className="plus">/</span><kbd>.</kbd></span><span className="d">Line height, down / up</span></div>
          <div><span className="k"><kbd>&#8679;</kbd><kbd>&#8984;</kbd><kbd>I</kbd></span><span className="d">Generate an image</span></div>
          <div><span className="k"><kbd>&#8679;</kbd><kbd>&#8984;</kbd><kbd>J</kbd></span><span className="d">Generate an SVG</span></div>
          <div><span className="k"><kbd>S</kbd></span><span className="d">Shaders menu</span></div>
          <div><span className="k"><kbd>&#8997;</kbd><kbd>R</kbd><span className="plus">/</span><kbd>&#8997;</kbd><kbd>T</kbd></span><span className="d">Copy as React / Tailwind</span></div>
          <div><span className="k"><kbd>&#8984;</kbd><kbd>Enter</kbd></span><span className="d">Screenshot the frame</span></div>
          <div><span className="k"><kbd>&#8984;</kbd><span className="plus">+</span><kbd>resize</kbd></span><span className="d">Crop an image, not scale it</span></div>
          <div><span className="k"><kbd>&#8679;</kbd><kbd>&#8984;</kbd><kbd>R</kbd></span><span className="d">Paste to replace</span></div>
          <div><span className="k"><kbd>C</kbd></span><span className="d">Comments for agents</span></div>
        </div>
      </section>
      
      <nav className="pagenav" aria-label="Sections">
        <header><h2>CONTENTS</h2><span>11 sections</span></header>
        <ol>
          <li><a href="#canvas"><svg><use href="#ic-canvas"/></svg><span className="lbl">Canvas</span><span className="n" aria-hidden="true">01</span></a></li>
          <li><a href="#selection"><svg><use href="#ic-select"/></svg><span className="lbl">Selection</span><span className="n" aria-hidden="true">02</span></a></li>
          <li><a href="#editing"><svg><use href="#ic-resize"/></svg><span className="lbl">Move &amp; resize</span><span className="n" aria-hidden="true">03</span></a></li>
          <li><a href="#type"><svg><use href="#ic-type"/></svg><span className="lbl">Typography</span><span className="n" aria-hidden="true">04</span></a></li>
          <li><a href="#vector"><svg><use href="#ic-pen"/></svg><span className="lbl">Vector &amp; pen</span><span className="n" aria-hidden="true">05</span></a></li>
          <li><a href="#ai"><svg><use href="#ic-ai"/></svg><span className="lbl">AI &amp; shaders</span><span className="n" aria-hidden="true">06</span></a></li>
          <li><a href="#color"><svg><use href="#ic-color"/></svg><span className="lbl">Color &amp; tokens</span><span className="n" aria-hidden="true">07</span></a></li>
          <li><a href="#export"><svg><use href="#ic-export"/></svg><span className="lbl">Export</span><span className="n" aria-hidden="true">08</span></a></li>
          <li><a href="#figma"><svg className="brandmark"><use href="#ic-figma"/></svg><span className="lbl">Figma &amp; paste</span><span className="n" aria-hidden="true">09</span></a></li>
          <li><a href="#collab"><svg><use href="#ic-comment"/></svg><span className="lbl">Collaboration</span><span className="n" aria-hidden="true">10</span></a></li>
          <li><a href="#mcp"><svg><use href="#ic-mcp"/></svg><span className="lbl">MCP &amp; agents</span><span className="n" aria-hidden="true">11</span></a></li>
        </ol>
      </nav>
      
      <aside className="rail" aria-label="Contents">
        <h2>LAYERS <span className="n">&middot; 11</span></h2>
        <ol>
          <li><a href="#canvas"><svg><use href="#ic-canvas"/></svg>Canvas</a></li>
          <li><a href="#selection"><svg><use href="#ic-select"/></svg>Selection</a></li>
          <li><a href="#editing"><svg><use href="#ic-resize"/></svg>Move &amp; resize</a></li>
          <li><a href="#type"><svg><use href="#ic-type"/></svg>Typography</a></li>
          <li><a href="#vector"><svg><use href="#ic-pen"/></svg>Vector &amp; pen</a></li>
          <li><a href="#ai"><svg><use href="#ic-ai"/></svg>AI &amp; shaders</a></li>
          <li><a href="#color"><svg><use href="#ic-color"/></svg>Color &amp; tokens</a></li>
          <li><a href="#export"><svg><use href="#ic-export"/></svg>Export</a></li>
          <li><a href="#figma"><svg className="brandmark"><use href="#ic-figma"/></svg>Figma &amp; paste</a></li>
          <li><a href="#collab"><svg><use href="#ic-comment"/></svg>Collaboration</a></li>
          <li><a href="#mcp"><svg><use href="#ic-mcp"/></svg>MCP &amp; agents</a></li>
        </ol>
      </aside>
      
      <main>
      
      {/* 01 CANVAS ------------------------------------------------- */}
      <section className="artboard" id="canvas">
        <p className="ab-label"><span className="num" aria-hidden="true">01</span> canvas</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon"><svg><use href="#ic-canvas"/></svg></span>
            <div>
              <h2 className="ab-title">Canvas &amp; navigation</h2>
              <p className="sub">Getting around, and starting things, without the toolbar.</p>
            </div>
          </div>
      
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>Space</kbd><span className="plus">or</span><kbd>H</kbd></span><span className="desc">Pan the canvas &mdash; hold Space, or switch to the pan tool with H</span></div>
            <div className="row"><span className="keys"><kbd>Z</kbd></span><span className="desc">Zoom tool</span></div>
            <div className="row"><span className="keys"><kbd>Shift</kbd><kbd>1</kbd><span className="plus">/</span><kbd>Shift</kbd><kbd>2</kbd></span><span className="desc">Zoom to fit everything on screen, or zoom the selection to fill it</span></div>
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><kbd>0</kbd></span><span className="desc">Zoom to 100%</span></div>
            <div className="row"><span className="keys"><kbd>Shift</kbd><span className="plus">+</span><kbd>scroll</kbd></span><span className="desc">Scroll the canvas horizontally</span></div>
            <div className="row"><span className="keys"><kbd>&larr;</kbd><kbd>&rarr;</kbd><kbd>&uarr;</kbd><kbd>&darr;</kbd></span><span className="desc">Pan with arrow keys, with nothing selected</span></div>
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><kbd>Enter</kbd></span><span className="desc">Full-page screenshot of the current frame</span></div>
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><kbd>.</kbd></span><span className="desc">Show or hide the entire UI. Press again to bring it back</span></div>
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><kbd>L</kbd></span><span className="desc">Collapse all layers in the layer tree</span></div>
          </div>
      
          <h3>tools &amp; structure</h3>
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>V</kbd></span><span className="desc">Move tool &mdash; back to selecting and dragging</span></div>
            <div className="row"><span className="keys"><kbd>F</kbd><span className="plus">/</span><kbd>Shift</kbd><kbd>F</kbd></span><span className="desc">Add a frame, or wrap the selection in one &mdash; wrapping converts the layout if needed</span></div>
            <div className="row"><span className="keys"><kbd>T</kbd></span><span className="desc">Add a text layer</span></div>
            <div className="row"><span className="keys"><kbd>R</kbd></span><span className="desc">Draw a rectangle</span></div>
            <div className="row"><span className="keys"><kbd>S</kbd></span><span className="desc">Open the shaders menu</span></div>
            <div className="row"><span className="keys"><kbd>Shift</kbd><kbd>A</kbd></span><span className="desc">Wrap the selection in a flex layout</span></div>
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><kbd>Shift</kbd><kbd>A</kbd></span><span className="desc">Remove the flex layout</span></div>
          </div>
      
          <h3>canvas behaviour</h3>
          <ul className="tips">
            <li><b>Pixel grid at 600%+</b><span className="m">Zoom past 600% to get a pixel grid for precision work. Snapping rounds to whole pixels.</span></li>
            <li><b>Hide the UI</b><span className="m">There's a button as well as the shortcut. Good for reviewing work or presenting. <kbd>Shift</kbd><kbd>.</kbd> minimises the UI instead of hiding it outright.</span></li>
            <li><b>Resizable panels</b><span className="m">The left sidebar and page list both resize. Pages support drag-and-drop reordering.</span></li>
            <li><b>Desktop tabs</b><span className="m">Paper Desktop supports tabs, so you can keep multiple files open like a browser.</span></li>
          </ul>
        </div>
      </section>
      
      {/* 02 SELECTION ---------------------------------------------- */}
      <section className="artboard" id="selection">
        <p className="ab-label"><span className="num" aria-hidden="true">02</span> selection</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon"><svg><use href="#ic-select"/></svg></span>
            <div>
              <h2 className="ab-title">Selection &amp; layers</h2>
              <p className="sub">Paper distinguishes shallow selection (top-level) from deep selection (inside groups). <kbd>&#8984;</kbd> is the way in.</p>
            </div>
          </div>
      
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><span className="plus">+</span><kbd>click</kbd></span><span className="desc"><b>Deep select</b> &mdash; grab a layer inside its parent directly</span></div>
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><span className="plus">+</span><kbd>right-click</kbd></span><span className="desc">List every layer under the cursor, then pick the one you want</span></div>
            <div className="row"><span className="keys"><kbd>Enter</kbd></span><span className="desc">Step <b>into</b> the selected element &mdash; selects its children. On text it edits the text; on a vector path it enters edit mode</span></div>
            <div className="row"><span className="keys"><kbd>Shift</kbd><kbd>Enter</kbd></span><span className="desc">Step <b>back up</b> the tree &mdash; selects the parent. <kbd>Esc</kbd> and <kbd>\</kbd> do the same; from the top level Esc clears the selection</span></div>
      
          </div>
      
          <h3>selecting faster</h3>
          <ul className="tips">
            <li className="third"><b>Marquee to refine</b><span className="m">Drag a rectangular selection over an existing one to refine it instead of starting over.</span></li>
            <li className="third"><b>Selection brush</b><span className="m">Brush across elements to select everything the stroke touches &mdash; faster than marquee for scattered layers.</span></li>
            <li className="third"><b>Recolor in bulk</b><span className="m">The Selection colors panel changes every selected element's colors at once. Also how you recolor pasted SVGs.</span></li>
            <li className="wide"><b>The dashboard is a real file manager</b><span className="m">Multi-select, duplication, search, and folders with subfolders for team files.</span></li>
          </ul>
        </div>
      </section>
      
      {/* 03 EDITING ------------------------------------------------ */}
      <section className="artboard" id="editing">
        <p className="ab-label"><span className="num" aria-hidden="true">03</span> transform</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon"><svg><use href="#ic-resize"/></svg></span>
            <div>
              <h2 className="ab-title">Move, resize &amp; duplicate</h2>
              <p className="sub">The modifier keys you hold <em>during</em> a drag are where most of Paper's speed lives.</p>
            </div>
          </div>
      
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><span className="plus">+</span><kbd>drag</kbd></span><span className="desc">Duplicate while dragging &mdash; alt-drag also supports compound rotation</span></div>
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><span className="plus">+</span><kbd>resize</kbd></span><span className="desc">Resize from center, both sides at once</span></div>
            <div className="row"><span className="keys"><kbd>Shift</kbd><span className="plus">+</span><kbd>resize</kbd></span><span className="desc">Snap the resize &mdash; constrain proportions and steps</span></div>
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><span className="plus">+</span><kbd>resize</kbd></span><span className="desc">Resize the parent while children stay put</span></div>
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><span className="plus">+</span><kbd>arrows</kbd></span><span className="desc">Resize the selection from the keyboard</span></div>
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><span className="plus">+</span><kbd>resize image</kbd></span><span className="desc"><b>Crop</b> instead of scale</span></div>
            <div className="row"><span className="keys"><kbd>0</kbd><span className="plus">&ndash;</span><kbd>9</kbd></span><span className="desc">Set opacity on the selection. Type two digits in a row for precision &mdash; <b>5</b> is 50%, <b>05</b> is 5%</span></div>
          </div>
      
          <h3>arrange</h3>
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><kbd>W</kbd><span className="plus">/</span><kbd>A</kbd><span className="plus">/</span><kbd>S</kbd><span className="plus">/</span><kbd>D</kbd></span><span className="desc">Align top, left, bottom, or right</span></div>
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><kbd>V</kbd><span className="plus">/</span><kbd>&#8997;</kbd><kbd>H</kbd></span><span className="desc">Align to the vertical or horizontal center</span></div>
            <div className="row"><span className="keys"><kbd>&#8963;</kbd><kbd>&#8997;</kbd><kbd>H</kbd><span className="plus">/</span><kbd>&#8963;</kbd><kbd>&#8997;</kbd><kbd>V</kbd></span><span className="desc">Distribute horizontally or vertically</span></div>
            <div className="row"><span className="keys"><kbd>]</kbd><span className="plus">/</span><kbd>[</kbd></span><span className="desc">Bring to the front, or send to the back</span></div>
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><kbd>]</kbd><span className="plus">/</span><kbd>&#8984;</kbd><kbd>[</kbd></span><span className="desc">Forward or backward one step. <kbd>&#8984;</kbd><kbd>&#8997;</kbd><kbd>&uarr;</kbd> / <kbd>&darr;</kbd> does the same</span></div>
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><span className="plus">+</span><kbd>hover</kbd></span><span className="desc">Show measurements between the selection and whatever you hover</span></div>
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><kbd>C</kbd></span><span className="desc">Toggle clip content</span></div>
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><kbd>&#8679;</kbd><kbd>&#8984;</kbd><kbd>R</kbd><span className="plus">/</span><kbd>F</kbd></span><span className="desc">Resize to <b>fit</b> the content, or <b>fill</b> the container. Double-click a resize handle to fit; <kbd>&#8997;</kbd> and double-click to fill</span></div>
          </div>
      
          <h3>layout &amp; flex</h3>
          <ul className="tips">
            <li><b>Gap and padding handles on canvas</b><span className="m">Flex containers show drag handles for gap and padding directly on the canvas &mdash; no panel needed. Negative gap is supported for overlapping layouts.</span></li>
            <li><b>Constraints panel</b><span className="m">Controls how children behave when the parent resizes: pin edges, center, or scale.</span></li>
            <li><b>Escape flex when you need to</b><span className="m">Any element inside a flex container can be set to "ignore flex layout" or absolute positioning to break out of flow.</span></li>
            <li><b>Wrapping containers</b><span className="m">Flex containers wrap with automatic line breaks &mdash; useful for tag lists and galleries.</span></li>
          </ul>
        </div>
      </section>
      
      {/* 04 TYPOGRAPHY — the featured section ----------------------- */}
      <div className="startbar">
        <p className="flag">high leverage</p>
        <div>
          <p><strong>Paper's typography hotkeys all live on <kbd>,</kbd> and <kbd>.</kbd></strong> &mdash; the modifier picks which property you're nudging. Learn that one pattern and you control size, weight, tracking, and leading without ever opening a panel.</p>
          <p>It's the single highest-leverage habit in the app.</p>
        </div>
      </div>
      
      <section className="artboard featured" id="type">
        <p className="ab-label"><span className="num" aria-hidden="true">04</span> typography</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon"><svg><use href="#ic-type"/></svg></span>
            <div>
              <h2 className="ab-title">Typography</h2>
              <p className="sub">One system, four properties. <kbd>,</kbd> decreases and <kbd>.</kbd> increases &mdash; the modifier stack decides <em>what</em> you're changing.</p>
            </div>
          </div>
      
          <div className="keymap">
            <div className="keymap-grid">
              <div className="km-row head">
                <span>property</span><span>hold</span><span>decrease</span><span>increase</span>
              </div>
              <div className="km-row">
                <span className="km-prop">Font size</span>
                <span className="km-mods"><kbd>Shift</kbd><kbd>&#8984;</kbd></span>
                <span className="km-cap hot">,</span><span className="km-cap hot">.</span>
              </div>
              <div className="km-row">
                <span className="km-prop">Font weight</span>
                <span className="km-mods"><kbd>&#8997;</kbd><kbd>&#8984;</kbd></span>
                <span className="km-cap hot">,</span><span className="km-cap hot">.</span>
              </div>
              <div className="km-row">
                <span className="km-prop">Letter spacing</span>
                <span className="km-mods"><kbd>&#8997;</kbd></span>
                <span className="km-cap hot">,</span><span className="km-cap hot">.</span>
              </div>
              <div className="km-row">
                <span className="km-prop">Line height</span>
                <span className="km-mods"><kbd>Shift</kbd><kbd>&#8997;</kbd></span>
                <span className="km-cap hot">,</span><span className="km-cap hot">.</span>
              </div>
            </div>
            <p className="km-note"><svg><use href="#ic-bulb"/></svg><span>Bold and italic sit outside the system on the usual keys: <kbd>&#8984;</kbd><kbd>B</kbd> and <kbd>&#8984;</kbd><kbd>I</kbd>.</span></p>
          </div>
      
          <h3>type features</h3>
          <ul className="tips">
            <li><b>Variable fonts, full control</b><span className="m">Set custom axis values on any variable font, including optical size. OpenType features &mdash; ligatures, alternates &mdash; are supported too.</span></li>
            <li><b>Text gradients</b><span className="m">Apply a gradient to text straight from the Fill panel. Multi-fill text survives export.</span></li>
            <li><b>Formatting panel</b><span className="m">Casing, wrapping, and truncation live in a dedicated panel. Line height has an "auto" value.</span></li>
            <li><b>Text stroke</b><span className="m">There's a dedicated Text Stroke panel for outlined type.</span></li>
            <li className="wide"><b>It types like a native app</b><span className="m">macOS text replacements, emoji, diacritics, and system-standard line and word navigation all work. Hidden truncated text reveals itself while you're editing.</span></li>
          </ul>
        </div>
      </section>
      
      {/* 05 VECTOR ------------------------------------------------- */}
      <section className="artboard" id="vector">
        <p className="ab-label"><span className="num" aria-hidden="true">05</span> vector</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon"><svg><use href="#ic-pen"/></svg></span>
            <div>
              <h2 className="ab-title">Vector &amp; pen</h2>
              <p className="sub">Paper's vector editing works on real SVG paths &mdash; pasted, generated, or drawn.</p>
            </div>
          </div>
      
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>P</kbd></span><span className="desc"><b>Pen tool</b> &mdash; draw new segments or extend existing paths</span></div>
            <div className="row"><span className="keys"><kbd>M</kbd></span><span className="desc"><b>Move tool</b> &mdash; adjust anchor and control points</span></div>
            <div className="row"><span className="keys"><kbd>Enter</kbd><span className="plus">or</span><kbd>double-click</kbd></span><span className="desc">Enter path editing mode on a path</span></div>
            <div className="row"><span className="keys"><kbd>Esc</kbd></span><span className="desc">Exit path editing &mdash; double-clicking empty space does the same</span></div>
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><kbd>Shift</kbd><kbd>'</kbd></span><span className="desc">Toggle pixel snapping &mdash; points align to the nearest half-pixel</span></div>
          </div>
      
          <ul className="tips">
            <li><b>Pen anywhere</b><span className="m">Click the pen tool outside an existing SVG and Paper auto-creates a new SVG container for the path.</span></li>
            <li><b>Recolor SVGs fast</b><span className="m">Select a pasted SVG and use the Selection colors panel to edit its colors without digging into the tree.</span></li>
            <li className="wide"><b><svg><use href="#ic-warn"/></svg>Not here yet</b><span className="m">Boolean operations, shape-to-path conversion, and better snapping are near-term on the roadmap. Vector networks and a shape builder are further out.</span></li>
          </ul>
        </div>
      </section>
      
      {/* 06 AI ----------------------------------------------------- */}
      <section className="artboard" id="ai">
        <p className="ab-label"><span className="num" aria-hidden="true">06</span> generation</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon"><svg><use href="#ic-ai"/></svg></span>
            <div>
              <h2 className="ab-title">AI generation &amp; shaders</h2>
              <p className="sub">Image generation is a first-class canvas tool, and shaders are Paper's signature trick &mdash; live, parametric, exportable as video.</p>
            </div>
          </div>
      
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>Shift</kbd><kbd>&#8984;</kbd><kbd>I</kbd></span><span className="desc"><b>Generate a raster image</b> &mdash; GPT Image 2, Nano Banana 2/Pro, Flux 2, Seedream 4.5, OpenAI Image Edit</span></div>
            <div className="row"><span className="keys"><kbd>Shift</kbd><kbd>&#8984;</kbd><kbd>J</kbd></span><span className="desc"><b>Generate an SVG</b> (Quiver) &mdash; the surrounding frame's context can inform the result</span></div>
            <div className="row"><span className="keys"><kbd>Shift</kbd><kbd>&#8984;</kbd><kbd>K</kbd></span><span className="desc">Upload images</span></div>
          </div>
      
          <h3>working with generated art</h3>
          <ul className="tips">
            <li><b>AI edits keep aspect ratio</b><span className="m">Editing an image with AI preserves its aspect ratio instead of distorting the frame.</span></li>
            <li><b>Shaders are parametric</b><span className="m">Every shader exposes editable parameters, and the eyedropper pulls reference colors straight into shader settings.</span></li>
            <li><b>Shaders export as video</b><span className="m">Export any frame, animated shaders included, as MP4 with a duration setting (Pro) from a dedicated Video panel.</span></li>
            <li><b>HEIC just works</b><span className="m">HEIC and HEIF photos straight off an iPhone drop onto the canvas without conversion.</span></li>
          </ul>
      
          <h3>shader library</h3>
          <ul className="swatches">
            <li><i style={{ background: "linear-gradient(135deg,#7B9BFF,#E86FB0 55%,#FFD98A)" }}></i>Mesh Gradient</li>
            <li><i style={{ background: "linear-gradient(135deg,#6E7BD8,#C77DBE)", filter: "contrast(1.1)" }}></i>Grain Gradient</li>
            <li><i style={{ background: "linear-gradient(145deg,#E8E8EC,#7A7F8C 45%,#F2F2F4 70%,#4A4E58)" }}></i>Liquid Metal</li>
            <li><i style={{ background: "radial-gradient(circle at 30% 30%,#00C2D1 22%,transparent 23%),radial-gradient(circle at 70% 65%,#E8407A 22%,transparent 23%),#F4E04D" }}></i>Halftone CMYK</li>
            <li><i style={{ background: "radial-gradient(circle,#EFEFE4 30%,transparent 31%) 0 0/7px 7px,#1A1A1A" }}></i>Halftone Dots</li>
            <li><i style={{ background: "repeating-linear-gradient(90deg,rgba(255,255,255,.55) 0 2px,rgba(150,180,210,.25) 2px 5px),#3E5568" }}></i>Fluted Glass</li>
            <li><i style={{ background: "#DAD6C8", boxShadow: "inset 0 0 8px rgba(0,0,0,.28)" }}></i>Paper Texture</li>
            <li><i style={{ background: "repeating-conic-gradient(#EFEFE4 0 25%,#2A2A2A 0 50%) 0 0/5px 5px" }}></i>Image Dithering</li>
            <li><i style={{ background: "#1A1A1A", boxShadow: "inset 0 0 0 2px #86B9FF,0 0 7px rgba(134,185,255,.75)" }}></i>Pulsing Border</li>
            <li><i style={{ background: "radial-gradient(ellipse at 35% 65%,#9B7BD8,#3B2E55 70%)" }}></i>Gem Smoke</li>
            <li><i style={{ background: "conic-gradient(from 0deg,#FF9A6B,#FFD98A,#7BD8C0,#7B9BFF,#FF9A6B)" }}></i>Swirl</li>
            <li><i style={{ background: "linear-gradient(180deg,#3FA9D8,#1E5F8C)", boxShadow: "inset 0 3px 5px rgba(255,255,255,.4)" }}></i>Water</li>
            <li><i style={{ background: "linear-gradient(120deg,#2B3A9B,#28C08A 40%,#F4E04D 68%,#E8402B)" }}></i>Heatmap</li>
            <li><i style={{ background: "radial-gradient(circle at 35% 40%,#8BE86F 30%,transparent 31%),radial-gradient(circle at 62% 62%,#8BE86F 26%,transparent 27%),#22301C" }}></i>Gooey</li>
          </ul>
        </div>
      </section>
      
      {/* 07 COLOR -------------------------------------------------- */}
      <section className="artboard" id="color">
        <p className="ab-label"><span className="num" aria-hidden="true">07</span> color</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon"><svg><use href="#ic-color"/></svg></span>
            <div>
              <h2 className="ab-title">Color, fills &amp; tokens</h2>
              <p className="sub">The color picker is OKLCH-native, and tokens are the bridge between your canvas and your codebase.</p>
            </div>
          </div>
      
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>I</kbd></span><span className="desc">Eyedropper / color picker</span></div>
            <div className="row"><span className="keys"><kbd>Shift</kbd><span className="plus">+</span><kbd>eyedrop</kbd></span><span className="desc">Pick a color into a gradient stop</span></div>
          </div>
      
          <h3>fills</h3>
          <ul className="tips">
            <li className="third"><b>Gradients on canvas</b><span className="m">Edit position, angle, and stops directly on the canvas. The Fill panel adds a numeric angle field and snap points.</span></li>
            <li className="third"><b>Stack your fills</b><span className="m">Image fills compose with other fills &mdash; layer a gradient over an image in one element. Drag to reorder fills and shadows.</span></li>
            <li className="third"><b>Filters &amp; backdrop</b><span className="m">Blur, saturation, grayscale, brightness, sepia, invert, hue rotation &mdash; plus backdrop filters for frosted glass.</span></li>
          </ul>
      
          <h3>tokens &amp; themes</h3>
          <ul className="tips">
            <li><b>Ten token types</b><span className="m">Color, radius, spacing, container, breakpoint, font family, font weight, font size, line height, letter spacing. Create them in the Theme tab.</span></li>
            <li><b>Apply from any property</b><span className="m">Use the property's dropdown &mdash; for colors, the four-circle icon opens the token list. Detach with the adjacent button or Backspace.</span></li>
            <li><b><svg><use href="#ic-warn"/></svg>Copied themes don't stay synced</b><span className="m"><kbd>&#8984;A</kbd> in the Theme tab, copy, paste into another file &mdash; or File &rsaquo; Theme &rsaquo; Copy/Paste theme. The copy is a snapshot, not a link.</span></li>
            <li><b>Tokens from your codebase</b><span className="m">Via MCP, an agent can generate tokens from your CSS variables or from an existing canvas frame. Tokens flow back out through code export as CSS variables.</span></li>
          </ul>
        </div>
      </section>
      
      {/* 08 EXPORT ------------------------------------------------- */}
      <section className="artboard" id="export">
        <p className="ab-label"><span className="num" aria-hidden="true">08</span> export</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon"><svg><use href="#ic-export"/></svg></span>
            <div>
              <h2 className="ab-title">Export &amp; handoff</h2>
              <p className="sub">Paper is web-native under the hood, so code export is real CSS &mdash; not an approximation of it.</p>
            </div>
          </div>
      
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><kbd>R</kbd></span><span className="desc">Copy selection as <b>React + CSS</b></span></div>
            <div className="row"><span className="keys"><kbd>&#8997;</kbd><kbd>T</kbd></span><span className="desc">Copy selection as <b>Tailwind</b></span></div>
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><kbd>Enter</kbd></span><span className="desc">Full-page screenshot</span></div>
          </div>
      
          <h3>output formats</h3>
          <div className="ledger">
            <div className="row"><span className="fmt">PNG / WEBP / AVIF</span><span className="desc">Raster, with size and scale presets</span></div>
            <div className="row"><span className="fmt">SVG</span><span className="desc">Vector, with token support intact</span></div>
            <div className="row"><span className="fmt">PDF</span><span className="desc">Single frame or multiple frames in one document</span></div>
            <div className="row"><span className="fmt">MP4</span><span className="desc">Video from any frame, with duration control &mdash; <b>Pro</b></span></div>
            <div className="row"><span className="fmt">REACT / TAILWIND</span><span className="desc">Code export that can reference your theme's CSS variables, so handoff speaks your design system's vocabulary</span></div>
          </div>
        </div>
      </section>
      
      {/* 09 FIGMA -------------------------------------------------- */}
      <section className="artboard" id="figma">
        <p className="ab-label"><span className="num" aria-hidden="true">09</span> migration</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon brand"><svg><use href="#ic-figma"/></svg></span>
            <div>
              <h2 className="ab-title">Figma migration &amp; pasting</h2>
              <p className="sub">Copy in Figma, paste in Paper. Layers arrive editable &mdash; with a short list of conversions to watch for.</p>
            </div>
          </div>
      
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>&#8984;</kbd><kbd>V</kbd></span><span className="desc">Paste &mdash; Figma layers, SVG, HTML, images, text</span></div>
            <div className="row"><span className="keys"><kbd>Shift</kbd><kbd>&#8984;</kbd><kbd>R</kbd></span><span className="desc">Paste to <b>replace</b> the selected element &mdash; plain <kbd>&#8984;R</kbd> renames the layer instead</span></div>
          </div>
      
          <h3>what survives the paste</h3>
          <div className="split">
            <section className="ok">
              <h4><svg><use href="#ic-check"/></svg>TRANSFERS CLEANLY</h4>
              <ul>
                <li>Auto layout</li>
                <li>Drop shadows</li>
                <li>Layer and background blurs</li>
                <li>Strokes</li>
                <li>Basic gradients</li>
              </ul>
            </section>
            <section className="no">
              <h4><svg><use href="#ic-x"/></svg>DOESN'T TRANSFER</h4>
              <ul>
                <li>Components and variables &mdash; they detach on paste</li>
                <li>Rich text with mixed styles</li>
                <li>Gradient strokes and diamond gradients</li>
                <li>Noise, texture, and glass effects</li>
                <li>Repeat patterns</li>
                <li><b>Masks arrive hidden</b> &mdash; they're there, but you have to unhide them in the layer tree</li>
                <li><b>Truncated text switches to height-fit</b> &mdash; so fixed-height text blocks will grow</li>
              </ul>
            </section>
          </div>
      
          <ul className="tips">
            <li><b><svg><use href="#ic-warn"/></svg>Images need the browser extension</b><span className="m">Figma image fills require Paper's browser extension connected to a Figma account that can open the source file. Without it the paste succeeds but the images are missing.</span></li>
            <li><b>HTML pastes as layers</b><span className="m">Paste HTML with inline styles and it becomes editable layers. Paper Snapshot goes further: copy an entire webpage as editable layers.</span></li>
            <li className="wide"><b><svg><use href="#ic-warn"/></svg>Snapshotting localhost needs CORS</b><span className="m">Pointing Snapshot at a local dev server requires CORS configured on it &mdash; the docs have per-server guides.</span></li>
          </ul>
        </div>
      </section>
      
      {/* 10 COLLAB ------------------------------------------------- */}
      <section className="artboard" id="collab">
        <p className="ab-label"><span className="num" aria-hidden="true">10</span> collaboration</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon"><svg><use href="#ic-comment"/></svg></span>
            <div>
              <h2 className="ab-title">Collaboration &amp; comments</h2>
              <p className="sub">Multiplayer is on by default. Comments are how you leave work for teammates &mdash; and for agents.</p>
            </div>
          </div>
      
          <div className="ledger">
            <div className="row"><span className="keys"><kbd>C</kbd></span><span className="desc"><b>Comment tool</b> &mdash; threads with resolve, search, filter, and sort</span></div>
          </div>
      
          <ul className="tips">
            <li className="wide"><b>Pin the issues, then send the agent through</b><span className="m">Comments are for teammates <em>and</em> agents. Mark every problem you see, then ask an agent to read the threads and fix them in one pass.</span></li>
            <li className="third"><b>Follow a teammate</b><span className="m">Click a collaborator's cursor to follow their view. Right-click for cursor chat on the canvas.</span></li>
            <li className="third"><b>Free seats are generous</b><span className="m">Free teams invite editors at no cost, and viewer roles with folder or file-level access are free too. View-only links work outside the team, anonymous visitors included.</span></li>
            <li className="third"><b>Agents show presence</b><span className="m">When an AI agent works in your file over MCP, it appears with a presence indicator like any other collaborator.</span></li>
          </ul>
        </div>
      </section>
      
      {/* 11 MCP ---------------------------------------------------- */}
      <section className="artboard" id="mcp">
        <p className="ab-label"><span className="num" aria-hidden="true">11</span> agents</p>
        <div className="ab-frame">
          <div className="ab-head">
            <span className="icon"><svg><use href="#ic-mcp"/></svg></span>
            <div>
              <h2 className="ab-title">MCP &amp; agents</h2>
              <p className="sub">Paper Desktop runs a local MCP server, so agents like Claude can read and edit the file you have open.</p>
            </div>
          </div>
      
          <h3>setup</h3>
          <div className="term">
            <header>
              <i></i><i></i><i></i><span>claude code</span>
              <button className="copy" type="button" data-copy="claude mcp add paper --transport http http://127.0.0.1:29979/mcp --scope user">copy</button>
            </header>
            <div className="body"><pre><span className="c"># Keep Paper Desktop open with a file loaded.</span>
      <span className="c"># The server starts automatically:</span>
      http://127.0.0.1:29979/mcp
      
      <span className="c"># Claude Code</span>
      <span className="p">$</span> claude mcp add paper --transport http \
            http://127.0.0.1:29979/mcp --scope user
      
      <span className="c"># Claude Desktop</span>
      <span className="c"># Add the marketplace paper-design/agent-plugins,</span>
      <span className="c"># then install the plugin.</span></pre></div>
          </div>
      
          <h3>living with it</h3>
          <ul className="tips">
            <li><b>What agents can do</b><span className="m">Read selection and file info, take screenshots, export JSX/PNG/SVG/video, create artboards, edit text and styles, and move, duplicate, or delete elements.</span></li>
            <li><b>Workflow ideas</b><span className="m">Pull design-system colors from Figma via dual MCPs, fill placeholders with real Notion content, or convert canvas designs into React and Tailwind pages.</span></li>
            <li><b><svg><use href="#ic-warn"/></svg>Wrong file getting edited?</b><span className="m">The MCP server always targets the <em>currently active</em> file. Ask the agent to call <button className="cmd" type="button" data-copy="get_basic_info">get_basic_info</button> to confirm which one that is.</span></li>
            <li><b><svg><use href="#ic-warn"/></svg>Connection stale?</b><span className="m">Restart the agent session first, then Paper Desktop. Behind a proxy or VPN, allowlist <button className="cmd" type="button" data-copy="*.paper.design">*.paper.design</button>.</span></li>
          </ul>
        </div>
      </section>
      
      </main>
      
      <footer>
        <p><svg className="mark" aria-hidden="true"><use href="#ic-paper"/></svg>Compiled from the <a href="https://paper.design/build-log">Paper build log</a> and <a href="https://paper.design/docs">docs</a> &mdash; tokens, vector editing, paste, MCP, and support &mdash; September 2026. Shortcuts shown for macOS. Styled after paper.design; Matter and Paper Mono are commercial faces, so this page uses Inter and Geist Mono as stand-ins.</p>
        <p className="fine">The Paper and Figma logos are trademarks of their respective owners and appear here only to identify the products described. This is an independent guide, not affiliated with or endorsed by either company.</p>
        <p className="byline">Made with <svg className="heart" aria-hidden="true"><use href="#ic-heart"/></svg><span className="sr">love</span> by <a href="https://x.com/sethjenks" rel="me noopener">Seth Jenks</a></p>
      </footer>
      
      </div>
      <GuideEffects />
    </>
  );
}
