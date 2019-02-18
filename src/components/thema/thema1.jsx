import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Transition } from 'react-spring';
import IdleTimer from 'react-idle-timer';
import ReactHowler from 'react-howler';
import style from '../ui/ui.css';
import Thema1Sound from '../../assets/audio/thema1.mp3';
import Thema2Sound from '../../assets/audio/thema2.mp3';
/* eslint-disable */
class ThemaVideo extends Component {
  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.state = {
      opacity: 1,
      height: '0rem',
      thema1: false,
      thema2: false,
    };
    this.idleTimer = null;
    this.onActive = this.onActive.bind(this);
    this.onIdle = this.onIdle.bind(this);
    this.handleOnHover = this.handleOnHover.bind(this);
  }

  componentDidMount() {
    if(this.props.thema === "1"){
      this.showSubtitles1();
    } else if (this.props.thema === "2") {
      this.showSubtitles2();
    }
    this.setState(
      {
        video: this.refs.video,
      },
      () => {
        ['pause', 'play'].forEach(event => {
          this.state.video.addEventListener(event, () => {
            this.forceUpdate();
          });
        });
        this.state.video.addEventListener('timeupdate', this.handleProgress);
      },
    );
  }
  showSubtitles1() {
    setTimeout(
      () =>
      this.setState({
        thema1: true,
        thema2: false,
      }),
      1000,
    );
    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              De weergave van de middeleeuwse stad was vaak gedetailleerd terug te vinden in sommige van Van Eyck’s werken.
            </span>,
          ],
        }),
      1000,
    );

    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              Dankzij de val van het West-Romeinse rijk werd het middeleeuws tijdperk ingezet. Hierdoor werd handel het belangrijkste kenmerk van dit tijdperk.
            </span>,
          ],
        }),
      6000,
    );

    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              Er ontstonden enorm veel nieuwe steden overal maar vooral rond rivierovergangen en kruispunten langs grote wegen. De meest voorkomende groepen mensen waren kooplieden en handwerkers die hun eigen woonkernen vormden.
            </span>,
          ],
        }),
      14000,
    );
    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              Deze handelaren-dorpjes/ nederzettingen werden dan ook in veel gevallen voorzien van een stadsmuur.
            </span>,
          ],
        }),
      26000,
    );
    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              De stadsbesturen bestonden in die tijd uit een gemeenteraad en burgemeesters waar schepenen zorgden voor het gerechtsbestuur en ordehandhaving binnen de stad.
            </span>,
          ],
        }),
      32000,
    );
    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              De steden werden vooral rijk door handel en nijverheid van handwerkers. Spring in dit thema middenin de middeleeuwse stad en ontdek de verhalen.
            </span>,
          ],
        }),
      40000,
    );
    setTimeout(() => this.setState({ items: [''] }), 47000);
    setTimeout(
      () =>
      this.setState({
        thema1: false,
      }),
      48000,
    );
  }

  showSubtitles2() {
    setTimeout(
      () =>
      this.setState({
        thema1: false,
        thema2: true,
      }),
      1000,
    );
    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              De Beeldhouwkunst in de Middeleeuwen stond in dienst van de religie.
            </span>,
          ],
        }),
      1000,
    );

    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              Ook werd het gebruikt om het Christelijk geloof te gaan uitbeelden, dit was omdat weinig mensen konden lezen en schrijven, waar beelden geen tekst nodig hebben.
            </span>,
          ],
        }),
      5000,
    );

    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              Vaak waren de beelden uit de middeleeuwen van heiligen, mensen zonder gebreken.
            </span>,
          ],
        }),
      14000,
    );
    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              Door gebruik van één enkele toon, realistische lichtinval en optische illusie kon Van Eyck zeer realistische beelden schilderen.
            </span>,
          ],
        }),
      19000,
    );
    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              zijn Grisaille Techniek was zo goed dat hij realistischere beelden kon schilderen dan beeldhouwers zelf, waarna ontstond er de competitie tussen schilders en beeldhouwers.
            </span>,
          ],
        }),
      26000,
    );
    setTimeout(
      () =>
        this.setState({
          items: [
            <span className={style.subTitle}>
              Hij schilderde in Grisaille om herdachte personen uit te beelden. Spring middenin de beeldhouwkunst en ontdek de verhalen.
            </span>,
          ],
        }),
      36200,
    );

    setTimeout(() => this.setState({ items: [''] }), 43000);
    setTimeout(
      () =>
      this.setState({
        thema2: false,
      }),
      45000,
    );
  }
  onActive() {
    this.state.opacity = 1;
  }

  onIdle() {
    this.state.opacity = 0;
  }

  togglePlay() {
    const { video } = this.state;
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    this.state.height = '0rem';
    this.state.opacity = 1;
  }

  handleOnHover() {
    this.state.height = '20.3rem';
    this.state.opacity = 0;
  }

  render() {
    const { video } = this.state;
    return (
      <div className={style.themaPlayer}>
      <IdleTimer
        ref={ref => {
          this.idleTimer = ref;
        }}
        element={document}
        onActive={this.onActive}
        onIdle={this.onIdle}
        onAction={this.onAction}
        debounce={250}
        timeout={2000}
      />
      <div className={style.subTitles}>
        <Transition
          native
          items={this.state.items}
          from={{ opacity: 0, transform: 'scale(1)' }}
          enter={[{ opacity: 1 }, { transform: 'scale(1.25)' }]}
          leave={[
            { transform: 'scale(0)', opacity: 0 },
            { opacity: 0 },
            { height: 0 },
          ]}
        >
          {item => props => (
            <div
              style={props}
              className={style.subTitleWrapper}
              children={item}
            />
          )}
        </Transition>
      </div>
        <ReactHowler
          src={Thema1Sound}
          loop = {false}
          playing={this.state.thema1}
        />
        <ReactHowler
          src={Thema2Sound}
          loop = {false}
          playing={this.state.thema2}
        />
        <div className={style.shadow} style={{ opacity: this.state.opacity }} />
        <video
          className={style.themaCanvas}
          ref="video"
          loop
          autoPlay
          playsInline
          onClick={this.togglePlay}
        >
          <source src={this.props.url} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default hot(module)(ThemaVideo);
