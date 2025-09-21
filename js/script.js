function getRecommendation() {
    const strength = document.getElementById('strength').value;
    const flavor = document.getElementById('flavor').value;
    const milk = document.getElementById('milk').value;
    const temperature = document.getElementById('temperature').value;
    const topping = document.getElementById('topping').value;

    let recommendation = '';

    if (strength === 'kuat' && flavor === 'pahit' && milk === 'tanpa') {
        recommendation = 'Espresso';
    } else if ((strength === 'sedang' || strength === 'kuat') && flavor === 'seimbang' && milk === 'tanpa') {
        recommendation = 'Americano';
    } else if ((strength === 'ringan' || strength === 'sedang') && flavor === 'creamy' && milk === 'susu') {
        recommendation = 'Latte';
    } else if ((strength === 'ringan' || strength === 'sedang') && flavor === 'manis' && milk === 'susu') {
        recommendation = 'Cappuccino';
    } else if (strength === 'ringan'  && flavor === 'seimbang' && milk === 'tanpa' && temperature === 'dingin') {
        recommendation = 'Cold Brew';
    } else {
        recommendation = 'Tidak ada pilihan minuman untuk kombinasi ini.';
    }

    if (recommendation !== 'Tidak ada pilihan minuman untuk kombinasi ini.'  && recommendation !== 'Cold Brew') {
        if (temperature === 'dingin') {
            recommendation = 'Ice ' + recommendation;
        } else if (temperature === 'panas') {
            recommendation = 'Hot ' + recommendation;
        }
    }

    if (milk !== 'tanpa') {
        recommendation += ``;
    }

    if (topping !== 'tanpa') {
        recommendation += ` dengan topping ${topping}`;
    }

    document.getElementById('result').innerHTML = `<h2>Rekomendasi Minuman Kopi: ${recommendation}</h2>`;
}
