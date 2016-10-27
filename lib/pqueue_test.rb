
class Testing

  def initialize(array)
    @array = array
  end

  def reverse

    a = @array.deep_clone
    a.each do |x|
      x.reverse!
    end

    p a

    b = @array.deep_clone
    p b
  end

end

class Object
  def deep_clone
    Marshal::load(Marshal.dump(self))
  end
end
