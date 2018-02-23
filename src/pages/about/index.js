import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

class AboutIndex extends React.Component {
  render() {
    return (
      <div>

        <h1>Cur, nisi quod turpis oratio est?</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <i>Restinguet citius, si ardentem acceperit.</i> Quid enim de amicitia statueris utilitatis causa expetenda vides. Cum audissem Antiochum, Brute, ut solebam, cum M. Summus dolor plures dies manere non potest? <code>Duo Reges: constructio interrete.</code> Sed tu istuc dixti bene Latine, parum plane. Avaritiamne minuis? Proclivi currit oratio. <mark>Quorum altera prosunt, nocent altera.</mark> <i>Id enim natura desiderat.</i> </p>

        <h2>Cum autem in quo sapienter dicimus, id a primo rectissime dicitur.</h2>

        <p>Sed plane dicit quod intellegit. Qua tu etiam inprudens utebare non numquam. Quid nunc honeste dicit? Naturales divitias dixit parabiles esse, quod parvo esset natura contenta. </p>

        <h3>Scisse enim te quis coarguere possit?</h3>

        <p>Teneo, inquit, finem illi videri nihil dolere. <b>Qui ita affectus, beatum esse numquam probabis;</b> Bonum incolumis acies: misera caecitas. <a href='http://loripsum.net/' target='_blank'>Tu quidem reddes;</a> Sin aliud quid voles, postea. <code>Paria sunt igitur.</code> Sed fac ista esse non inportuna; Quid autem habent admirationis, cum prope accesseris? <a href='http://loripsum.net/' target='_blank'>Certe non potest.</a> </p>

        <ol>
            <li>Cuius tanta tormenta sunt, ut in iis beata vita, si modo dolor summum malum est, esse non possit.</li>
            <li>Hic ego: Pomponius quidem, inquam, noster iocari videtur, et fortasse suo iure.</li>
            <li>Egone non intellego, quid sit don Graece, Latine voluptas?</li>
            <li>Nam constitui virtus nullo modo potesti nisi ea, quae sunt prima naturae, ut ad summam pertinentia tenebit.</li>
        </ol>

        <pre>
            Quo modo autem optimum, si bonum praeterea nullum est? Quod totum contra est. <br />
            Quo modo autem optimum, <br />
            Si bonum praeterea nullum est? <br />
            Quod totum contra est.
        </pre>

        <blockquote cite='http://loripsum.net'>
        Quocumque enim modo summum bonum sic exponitur, ut id vacet honestate, nec officia nec virtutes in ea ratione nec amicitiae constare possunt.
        </blockquote>

        <h4>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus</h4>

        <p>Respondent extrema primis, media utrisque, omnia omnibus. Cave putes quicquam esse verius. Itaque ad tempus ad Pisonem omnes. Qui autem esse poteris, nisi te amor ipse ceperit? </p>

        <ul>
            <li>Tollenda est atque extrahenda radicitus.</li>
            <li>Nam prius a se poterit quisque discedere quam appetitum earum rerum, quae sibi conducant, amittere.</li>
            <li>Ut aliquid scire se gaudeant?</li>
        </ul>

        <p>Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Nemo nostrum istius generis asotos iucunde putat vivere. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Paria sunt igitur. Quis istud possit, inquit, negare? Ergo illi intellegunt quid Epicurus dicat, ego non intellego? Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. <b>Efficiens dici potest.</b> Est, ut dicis, inquam. Quid enim est a Chrysippo praetermissum in Stoicis? </p>

        <h5>Scisse enim te quis coarguere possit?</h5>

        <p>Teneo, inquit, finem illi videri nihil dolere. <b>Qui ita affectus, beatum esse numquam probabis;</b> Bonum incolumis acies: misera caecitas. <a href='http://loripsum.net/' target='_blank'>Tu quidem reddes;</a> Sin aliud quid voles, postea. <code>Paria sunt igitur.</code> Sed fac ista esse non inportuna; Quid autem habent admirationis, cum prope accesseris? <a href='http://loripsum.net/' target='_blank'>Certe non potest.</a> </p>

        <h6>Cur, nisi quod turpis oratio est?</h6>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <i>Restinguet citius, si ardentem acceperit.</i> Quid enim de amicitia statueris utilitatis causa expetenda vides. Cum audissem Antiochum, Brute, ut solebam, cum M. Summus dolor plures dies manere non potest? <code>Duo Reges: constructio interrete.</code> Sed tu istuc dixti bene Latine, parum plane. Avaritiamne minuis? Proclivi currit oratio. <mark>Quorum altera prosunt, nocent altera.</mark> <i>Id enim natura desiderat.</i> </p>

      </div>
    )
  }
}

export default AboutIndex
