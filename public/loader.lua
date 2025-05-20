local MapName = game.PlaceId  -- ou outro identificador do mapa

-- Tabela com scripts por mapa
local MapScripts = {
    [1240123653] = function()  -- ID do mapa 1
    loadstring(game:HttpGet('https://raw.githubusercontent.com/wendelxjsh/wendelxjsh/refs/heads/main/obf_bBdD8d8Smq4rd1y5sN98221OlsH36bDNFV1324Lni53J26c8SkZsl0QDy2tFTI13.lua%20(1).txt'))()
    end,

    [1632210982] = function()  -- ID do mapa 2
    loadstring(game:HttpGet('https://raw.githubusercontent.com/wendelxjsh/wendelxjsh/refs/heads/main/obf_bBdD8d8Smq4rd1y5sN98221OlsH36bDNFV1324Lni53J26c8SkZsl0QDy2tFTI13.lua%20(1).txt'))()
    end,
}

-- Verifica e executa o script correspondente
if MapScripts[MapName] then
    MapScripts[MapName]()
else
    warn("Nenhum script definido para este mapa: " .. tostring(MapName))
end
