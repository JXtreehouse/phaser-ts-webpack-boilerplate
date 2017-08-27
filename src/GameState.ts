/**
* @author       Digitsensitive <digit.sensitivee@gmail.com>
* @copyright    2017 Digitsensitive
* @license      Digitsensitive
*/


export class GameState extends Phaser.State {

  private m_phaserSprite: Phaser.Sprite;

  /*
   * FIRST FUNCTION CALLED WHEN THE STATE STARTS UP
   * ROUTE THE GAME AWAY TO ANOTHER STATE IF NECESSARY, PREPARE VARIABLES OR OBJECTS
   */
  init() {
    this.m_phaserSprite = undefined;
  }


  /*
   * IS CALLED AFTER INIT()
   * USE THIS TO LOAD YOUR GAME ASSETS. DON'T CREATE OBJECTS HERE IF THEY REQUIRE ASSETS
   */
  preload(): void {
    this.game.load.image("phaser", "../assets/sprites/phaser.png");

  }

  /*
   * LOADUPDATE() IS CALLED DURING LOADER PROCESS -> AFTER PRELOAD()
   * ONLY HAPPENS IF ASSETS LOAD UP IN PRELOAD() METHOD
   */
  loadUpdate() { }

  /*
   * LOADRENDER() IS CALLED DURING LOADER PROCESS -> AFTER LOADUPDATE()
   * ONLY HAPPENS IF ASSETS LOAD UP IN PRELOAD() METHOD
   * IN CONTRAST TO RENDER() YOU MUST HERE BE SURE THE ASSETS EXISTS
   */
  loadRender() { }

  /*
   * CREATE() IS CALLED AFTER PRELOAD()
   * CREATE YOUR OBJECTS HERE
   */
  create(): void {
    this.m_phaserSprite = this.add.sprite(this.game.width/2, this.game.height/2, 'phaser');
    this.m_phaserSprite.anchor.setTo(0.5, 0.5);
  }



  /*
   * UPDATE() IS CALLED DURING THE CORE GAME LOOP
   * AFTER debug, physics, plugins and the Stage have had their preUpdate methods called.
   * BEFORE Stage, Tweens, Sounds, Input, Physics, Particles and Plugins have had their postUpdate methods called.
   */
  update(): void {

  }

  /*
   * PRERENDER() IS CALLED AFTER ALL GAME OBJECTS HAVE BEEN UPDATED, BUT BEFORE ANY RENDERING TAKES PLACE
   */
  preRender() { }

  /*
   * NEARLY ALL OBJECTS IN PHASER RENDER AUTOMATICALLY
   * RENDER() IS CALLED AFTER THE GAME RENDERER AND PLUGINS HAVE RENDERED, SO HERE DO FINAL POST-PRECESSING STYLE EFFECTS
   * HAPPENS BEFORE POSTRENDER()
   */
  render() { }

  /*
   * PAUSED() WILL BE CALLED IF THE CORE GAME LOOP IS PAUSED
   */
  paused() { }

  /*
   * PAUSEUPDATE() IS CALLED WHILE THE GAME IS PAUSED INSTEAD OF PREUPDATE, UPDATE AND POSTUPDATE
   */
  pauseUpdate() { }

  /*
   * IF GAME IS SET TO SCALEMODE RESIZE, THEN BROWSER WILL CALL RESIZE() EACH TIME RESIZE HAPPENS
   */
  resize() { }

  /*
   * RESUMED() IS CALLED WHEN THE CORE GAME LOOP RESUMES FROM A PAUSED STATE
   */
  resumed() { }

  /*
   * SHUTDOWN() WILL BE CALLED WHEN THE STATE IS SHUTDOWN (i.e. YOU SWITCH TO ANOTHER STATE FROM THIS ONE)
   */
  shutdown() {;
  }

}
