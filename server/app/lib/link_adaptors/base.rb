module LinkAdaptors
  class Base
    attr_reader :obj

    def initialize(obj)
      @obj = obj
    end

    def markdown_link
      "[#{display_name}](#{path})"
    end

    def display_name
      raise StandardError.new("implement in subclass")
    end

    def base_path
      raise StandardError.new("implement in subclass")
    end

    def path(opts = {})
      if opts[:include_domain]
        "https://civicdb.org#{base_path}"
      else
        base_path
      end
    end

    def permalink_path(opts = {})
      if opts[:include_domain]
        "https://civicdb.org#{auto_permalink}"
      else
        auto_permalink
      end
    end

    def auto_permalink
      "/links/#{self.class.name.demodulize.underscore.pluralize}/#{obj.id}"
    end
  end
end
