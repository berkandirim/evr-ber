/*----------------*
_░▒███████
░██▓▒░░▒▓██
██▓▒░__░▒▓██___██████
██▓▒░____░▓███▓__░▒▓██
██▓▒░___░▓██▓_____░▒▓██
██▓▒░_______________░▒▓██
_██▓▒░______________░▒▓██
__██▓▒░____________░▒▓██
___██▓▒░__________░▒▓██
____██▓▒░________░▒▓██
_____██▓▒░_____░▒▓██
______██▓▒░__░▒▓██
_______█▓▒░░▒▓██
_________░▒▓██
_______░▒▓██
_____░▒▓██
 *----------------*/

(() => {
  const renderText = (target, text) => {
    target.innerHTML = text;
  };

  const startTime = moment('2015-11-14 00:00:00');
  const currentTime = moment(moment().format('YYYY-MM-DD hh:mm:ss'));
  const currentYear = moment().format('YYYY');
  const eventTime = moment(`${parseInt(currentYear) + 1}-11-14 00:00:00`);
  const year = currentTime.diff(startTime, 'years');
  const eventTimeTS = eventTime.unix();
  const currentTimeTS = currentTime.unix();
  const diffTime = eventTimeTS - currentTimeTS;
  let duration = moment.duration(diffTime * 1000, 'milliseconds');
  const interval = 1000;

  const application = Stimulus.Application.start();

  application.register(
    'dateTime',
    class extends Stimulus.Controller {
      static targets = ['year', 'timeLeft'];
      initialize() {
        renderText(
          this.timeLeftTarget,
          `${duration.months()} ay ${duration.days()} gün ${duration.hours()}:${duration.minutes()}:${duration.seconds()}`
        );
        setInterval(() => {
          duration = moment.duration(duration - interval, 'milliseconds');
          renderText(
            this.timeLeftTarget,
            `${duration.months()} ay ${duration.days()} gün ${duration.hours()}:${duration.minutes()}:${duration.seconds()}`
          );
        }, interval);

        renderText(this.yearTarget, year);
      }
    }
  );
})();
