<a href={`/bird/${bird.slug}`} class="relative block">
  <img class="object-cover drop-shadow-card card-img opacity-0 pointer-events-none" src={`${assets}/images/cards/${bird.friendlyId}.png`} alt="">
  <div class="card absolute inset-0">
    <div class="card-inner">
      <div class="card-front">
        <div class="block">
          <img class="object-cover drop-shadow-card card-img" src={`${assets}/images/cards/${bird.friendlyId}.png`} alt="">
        </div>
      </div>
        <div class="card-back" style={`--bird-color: #${bird.accentColor}; --text-color: 
        ${invert(bird.accentColor, {
          black: '#11191E', 
          white: '#ffffff', 
          threshold: .42
        })}
      `}>
        <div class="block relative">
          <img class="object-cover drop-shadow-card card-img" src={`${assets}/images/cards/card-back-${bird.rarity === 5 ? 'dark' : 'light'}.png`} alt="">
          <div class="absolute top-0 left-0 py-2 px-4 transfrom rounded-tl-lg rounded-br-lg drop-shadow flex items-center justify-center" style={`background-color: #${bird.accentColor};`}>
            <div class="text-lg" style={`color: #${invert(bird.accentColor, {
              black: '#11191E', 
              white: '#ffffff', 
              threshold: .42
            })}`}>
              <span class="">{bird.smallName ? bird.smallName+' ' : ''}</span>
              <span class="font-black">{bird.bigName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</a>