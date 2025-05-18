local Players = game:GetService("Players")
local player = Players.LocalPlayer

-- Criar GUI
local gui = Instance.new("ScreenGui", player:WaitForChild("PlayerGui"))
gui.ResetOnSpawn = false

-- Imagem de tela cheia
local img = Instance.new("ImageLabel", gui)
img.Size = UDim2.new(1, 0, 1, 0)
img.Position = UDim2.new(0, 0, 0, 0)
img.Image = "rbxassetid://117784353881695"
img.BackgroundTransparency = 1
img.ImageTransparency = 0
img.ScaleType = Enum.ScaleType.Stretch

-- Música com loop
local sound = Instance.new("Sound", workspace)
sound.SoundId = "rbxassetid://91299590639144"
sound.Volume = 2
sound.Looped = true
sound:Play()

-- Esperar 5 segundos
wait(5)

-- Sumir com a imagem, mas manter a música
img:Destroy()
gui:Destroy()
